// needs to be first import, it loads the polyfills
import { Module } from '@nestjs/common';
import { AngularRendererModule } from '@nitedani/angular-renderer-nestjs';
import { AppComponent } from '../app/app.component';
import { SharedModule } from '../shared.module';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { BackendCatsModule } from '@gull/backend-cats';

@Module({
  imports: [
    AngularRendererModule.forRoot({
      page: AppComponent,
      // import only on server
      imports: [SharedModule],
      // provide only on server
      providers: [provideNoopAnimations()],
    }),

    // Server imports
    BackendCatsModule
  ],
  controllers: [],
})
export class AppModule {}
