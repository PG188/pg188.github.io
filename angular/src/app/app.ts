import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portfolio');

  protected readonly projects = [
    {
      title: 'QuadSIM',
      description: 'A project focused on quadcopter simulation.',
    },
    {
      title: 'Formula Hybrid',
      description: 'Engineering and robotics project work.',
    },
  ];

}
