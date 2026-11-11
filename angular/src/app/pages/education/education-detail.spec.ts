import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { EducationDetail } from './education-detail';

describe('EducationDetail', () => {
  let fixture: ComponentFixture<EducationDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationDetail],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => 'masters' } } },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EducationDetail);
    fixture.detectChanges();
  });

  it('should render graduate program details and thesis links', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('h1')?.textContent).toContain('Master of Applied Science');
    expect(page.querySelectorAll('.topics li').length).toBeGreaterThan(0);
    expect(page.querySelector('.education-image img')?.getAttribute('src'))
      .toBe('/assets/education/masters-team.jpg');
    expect(page.querySelector('a[href="http://hdl.handle.net/11375/27329"]')).toBeTruthy();
  });
});
