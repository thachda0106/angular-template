import { Routes } from '@angular/router';
import { authRoutes } from './features/auth/routes';
import { homeRoutes } from './features/home/routes';
import { blogRoutes } from './features/blogs/routes';

export const routes: Routes = [
  ...homeRoutes,
  ...authRoutes,
  ...blogRoutes,
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  {
    path: '**',
    loadComponent: () =>
      import('../shared/components/not-found/not-found.component').then(
        (m) => m.NotFoundComponent,
      ),
  },
];
