import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomePageComponent } from '@gull/welcome';

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet, WelcomePageComponent],
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {}
