// needs to be first import, it loads the polyfills
import { Module } from '@nestjs/common';
import { AngularRendererModule } from '@nitedani/angular-renderer-nestjs';
import { AppComponent } from '../src/app/app.component';
import { SharedModule } from '../src/shared.module';

@Module({
  imports: [
    AngularRendererModule.forRoot({
      page: AppComponent,
      // import only on server
      imports: [SharedModule],
      // provide only on server
      providers: [],
    }),
  ],
})
export class AppModule {}

