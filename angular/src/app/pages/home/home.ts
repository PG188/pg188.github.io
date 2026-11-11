import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { projectCards } from '../projects/project-data';

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  protected readonly projects = projectCards;
}