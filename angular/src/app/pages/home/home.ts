import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  protected readonly projects = [
    { title: 'Mechatronics Engineering Capstone' },
    { title: 'Personal Website' },
    { title: 'McMaster Hyperloop' },
    { title: 'EcoCAR3' },
    { title: 'Formula Hybrid' },
    { title: 'Strangers' },
    { title: 'QuadSim', route: '/projects/quadsim' },
    { title: 'Sumobot' },
    { title: 'Quadcopter Design' },
    { title: 'Class Projects' },
    { title: 'FIRST Robotics' },
    { title: 'F1 in schools' },
    { title: 'VEX Robotics' },
    { title: 'Skills Robotics' },
  ];
}