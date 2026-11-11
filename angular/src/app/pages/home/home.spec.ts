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
    const links = fixture.nativeElement.querySelectorAll(
      '#projects-heading ~ .project-card',
    );

    expect(links.length).toBe(14);
    expect(fixture.nativeElement.querySelector('a[href="/projects/quadsim"]')?.textContent)
      .toContain('QuadSim');
  });

  it('should render a thumbnail and summary for every project', () => {
    const page = fixture.nativeElement as HTMLElement;
    const cards = page.querySelectorAll<HTMLAnchorElement>(
      '#projects-heading ~ .project-card',
    );

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
      (fixture.nativeElement as HTMLElement).querySelectorAll(
        '#projects-heading ~ .project-card .project-year',
      ),
      (element) => Number(element.textContent),
    );

    expect(years).toEqual([...years].sort((first, second) => second - first));
  });

  it('should display career cards from newest to oldest with employer logos', () => {
    const page = fixture.nativeElement as HTMLElement;
    const cards = page.querySelectorAll<HTMLAnchorElement>('.career-card');
    const dates = Array.from(page.querySelectorAll('.career-card .project-year'), (element) =>
      Number(element.textContent?.match(/\d{4}/)?.[0]),
    );

    expect(cards.length).toBe(10);
    expect(dates).toEqual([...dates].sort((first, second) => second - first));
    expect(
      Array.from(cards).every(
        (card) =>
          card.querySelector('img')?.getAttribute('src') &&
          card.querySelector('h3') &&
          card.getAttribute('href')?.startsWith('/career/'),
      ),
    ).toBe(true);
  });

  it('should link all education cards to their detail pages', () => {
    const cards = (fixture.nativeElement as HTMLElement).querySelectorAll<HTMLAnchorElement>(
      '.education-card',
    );

    expect(cards.length).toBe(4);
    expect(
      Array.from(cards).every(
        (card) =>
          card.querySelector('img')?.getAttribute('src') &&
          card.getAttribute('href')?.startsWith('/education/'),
      ),
    ).toBe(true);
    expect(cards[0].getAttribute('href')).toBe('/education/masters');
  });
});
