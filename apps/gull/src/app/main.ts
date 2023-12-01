import { provideHttpClient } from '@angular/common/http';
import { renderPage } from '@nitedani/vite-plugin-angular/client';
import { SharedModule } from '../shared.module';
import { AppComponent } from './app.component';
import { provideAnimations } from '@angular/platform-browser/animations';

renderPage({
  page: AppComponent,
  imports: [SharedModule],
  providers: [provideHttpClient(), provideAnimations()],
});
