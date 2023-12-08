import { provideAnimations } from '@angular/platform-browser/animations';
import { renderPage } from '@nitedani/vite-plugin-angular/client';
import { AppComponent } from '../app/app.component';
import { SharedModule } from '../shared.module';

renderPage({
  page: AppComponent,
  imports: [SharedModule],
  providers: [provideAnimations()],
});
