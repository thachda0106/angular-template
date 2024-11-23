export const authRoutes = [
  {
    path: 'auth/login',
    title: 'Login page app',
    loadComponent: () =>
      import('./views/login-view/login-view.component').then(
        (m) => m.LoginViewComponent,
      ),
  },
  {
    path: 'auth/register',
    title: 'Register page app',
    loadComponent: () =>
      import('./views/register-view/register-view.component').then(
        (m) => m.RegisterViewComponent,
      ),
  },
];
