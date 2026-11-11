import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Quadsim } from './pages/projects/quadsim/quadsim';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'projects/quadsim', component: Quadsim },
];