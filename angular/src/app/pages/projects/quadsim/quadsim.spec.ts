import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Quadsim } from './quadsim';

describe('Quadsim', () => {
  let component: Quadsim;
  let fixture: ComponentFixture<Quadsim>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Quadsim],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Quadsim);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
