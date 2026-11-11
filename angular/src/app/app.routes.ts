import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Quadsim } from './pages/projects/quadsim/quadsim';
import { ProjectDetail } from './pages/projects/project-detail';
import { FirstRobotics } from './pages/projects/first-robotics/first-robotics';
import { VexRobotics } from './pages/projects/vex-robotics/vex-robotics';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'projects/quadsim', component: Quadsim },
  { path: 'projects/first', component: FirstRobotics },
  { path: 'projects/vex', component: VexRobotics },
  { path: 'projects/:slug', component: ProjectDetail },
  { path: '**', redirectTo: '' },
];