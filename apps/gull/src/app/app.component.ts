import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from '@gull/welcome';

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet, WelcomeComponent],
  template: `Some landing page<router-outlet></router-outlet><gull-welcome></gull-welcome> `,
})
export class AppComponent {}
