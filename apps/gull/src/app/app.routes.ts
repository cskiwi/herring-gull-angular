import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@gull/welcome').then((m) => m.WelcomeComponent),
  },
];
