import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: '',
    title: 'Home',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/home/home.component'),
  },
  {
    path: 'login',
    title: 'Login',
    loadComponent: () => import('./pages/login/login.component'),
  },
  {
    path: '**',
    title: '404',
    loadComponent: () => import('./pages/not-found/not-found.component'),
  },
];
