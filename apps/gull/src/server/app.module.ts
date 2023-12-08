// needs to be first import, it loads the polyfills
import { Module } from '@nestjs/common';
import { AngularRendererModule } from '@nitedani/angular-renderer-nestjs';
import { AppComponent } from '../app/app.component';
import { SharedModule } from '../shared.module';
import { CatsController } from './test.controller';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

@Module({
  imports: [
    AngularRendererModule.forRoot({
      page: AppComponent,
      // import only on server
      imports: [SharedModule],
      // provide only on server
      providers: [provideNoopAnimations()],
    }),
  ],
  controllers: [CatsController],
})
export class AppModule {}
