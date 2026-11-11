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
    { title: 'Mechatronics Engineering Capstone', url: 'https://www.prakhargarg.ca/Projects/capstone/index.html' },
    { title: 'Personal Website' },
    { title: 'McMaster Hyperloop' },
    { title: 'EcoCAR3' },
    { title: 'Formula Hybrid' },
    { title: 'Strangers' },
    { title: 'QuadSim' },
    { title: 'Sumobot' },
    { title: 'Quadcopter Design' },
    { title: 'Class Projects' },
    { title: 'FIRST Robotics' },
    { title: 'F1 in schools' },
    { title: 'VEX Robotics' },
    { title: 'Skills Robotics' },
  ];
}
