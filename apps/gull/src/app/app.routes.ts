import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@gull/welcome').then((m) => m.WelcomePageComponent),
  },
  {
    path: 'page1',
    loadChildren: () => import('@gull/page1').then((m) => m.page1Routes),
  },
  {
    path: 'page2',
    loadChildren: () => import('@gull/page2').then((m) => m.page2Routes),
  },
];
