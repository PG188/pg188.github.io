import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { projectCards } from '../projects/project-data';
import { careerPages } from './career-data';
import { educationPages } from '../education/education-data';

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  protected readonly education = educationPages;

  protected readonly career = [...careerPages].sort(
    (first, second) => second.startYear - first.startYear,
  );

  protected readonly projects = [...projectCards].sort(
    (first, second) => second.startYear - first.startYear,
  );
}