import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Quadsim } from './pages/projects/quadsim/quadsim';
import { ProjectDetail } from './pages/projects/project-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'projects/quadsim', component: Quadsim },
  { path: 'projects/:slug', component: ProjectDetail },
  { path: '**', redirectTo: '' },
];