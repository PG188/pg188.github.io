import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { careerPages } from '../home/career-data';

@Component({
  imports: [RouterLink],
  selector: 'app-career-detail',
  styleUrl: './career-detail.css',
  templateUrl: './career-detail.html',
})
export class CareerDetail {
  private readonly route = inject(ActivatedRoute);
  protected readonly position = careerPages.find(
    (position) => position.slug === this.route.snapshot.paramMap.get('slug'),
  );
}
