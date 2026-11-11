import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { educationPages } from './education-data';

@Component({
  imports: [RouterLink],
  selector: 'app-education-detail',
  styleUrl: './education-detail.css',
  templateUrl: './education-detail.html',
})
export class EducationDetail {
  private readonly route = inject(ActivatedRoute);
  protected readonly education = educationPages.find(
    (item) => item.slug === this.route.snapshot.paramMap.get('slug'),
  );
}
