import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { CareerDetail } from './career-detail';

describe('CareerDetail', () => {
  let fixture: ComponentFixture<CareerDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerDetail],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => 'l3' } } },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CareerDetail);
    fixture.detectChanges();
  });

  it('should render the role details and reflection', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('h1')?.textContent).toContain('Algorithm Developer');
    expect(page.querySelector('h2')?.textContent).toContain('Job Description');
    expect(page.querySelectorAll('.content li').length).toBeGreaterThan(0);
    expect(page.textContent).toContain('Reflection');
  });
});
