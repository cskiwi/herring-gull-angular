import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { renderPage } from '@nitedani/vite-plugin-angular/client';
import { SharedModule } from '../shared.module';
import { AppComponent } from '../app/app.component';

renderPage({
  page: AppComponent,
  imports: [SharedModule],
  providers: [provideHttpClient(withFetch()), provideAnimations()],
});
