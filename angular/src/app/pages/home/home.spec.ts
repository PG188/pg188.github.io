import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Home } from './home';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should link all project cards to their Angular project routes', () => {
    const links = fixture.nativeElement.querySelectorAll('.project-card');

    expect(links.length).toBe(14);
    expect(fixture.nativeElement.querySelector('a[href="/projects/quadsim"]')?.textContent)
      .toContain('QuadSim');
  });

  it('should render a thumbnail and summary for every project', () => {
    const page = fixture.nativeElement as HTMLElement;
    const cards = page.querySelectorAll<HTMLAnchorElement>('.project-card');

    expect(
      Array.from(cards).every(
        (card) =>
          card.querySelector('img')?.getAttribute('src') &&
          (card.querySelector('p')?.textContent?.trim().length ?? 0) > 0,
      ),
    ).toBe(true);
  });

  it('should display projects from newest to oldest', () => {
    const years = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('.project-year'),
      (element) => Number(element.textContent),
    );

    expect(years).toEqual([...years].sort((first, second) => second - first));
  });
});
