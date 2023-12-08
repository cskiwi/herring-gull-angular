import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

// This module is imported on client, inside src/app/main.ts
// This module is imported on server, inside src/server/app.module.ts
// SharedModule provides AppService on client and server

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [provideHttpClient(withFetch())],a
})
export class SharedModule {
  constructor() {}
}
