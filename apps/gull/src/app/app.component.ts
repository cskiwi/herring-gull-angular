import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from '@gull/welcome';

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet, WelcomeComponent],
  template: ` <router-outlet></router-outlet>`,

})
export class AppComponent {}

