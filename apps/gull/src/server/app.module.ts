// needs to be first import, it loads the polyfills
import { AngularRendererModule } from '@nitedani/angular-renderer-nestjs';
import { Module } from '@nestjs/common';
import { AppComponent } from '../app/app.component';
import { SharedModule } from '../shared.module';
import { RouterModule } from '@angular/router';
import { routes } from '../app/app.routes';

@Module({
  imports: [
    AngularRendererModule.forRoot({
      page: AppComponent,
      // import only on server
      imports: [SharedModule, RouterModule.forRoot(routes)],
      // provide only on server
      providers: [],
    }),
  ],
})
export class AppModule {}
