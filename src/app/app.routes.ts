import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  // URL de la versión anterior del sitio.
  { path: 'inicio', redirectTo: '', pathMatch: 'full' },
  {
    path: 'proyectos/:slug',
    loadComponent: () => import('./pages/project/project').then((m) => m.ProjectPage),
  },
  {
    path: '404',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
  },
];
