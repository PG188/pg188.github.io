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
    const links = fixture.nativeElement.querySelectorAll('article a');

    expect(links.length).toBe(14);
    expect(fixture.nativeElement.querySelector('a[href="/projects/quadsim"]')?.textContent)
      .toContain('QuadSim');
  });
});
