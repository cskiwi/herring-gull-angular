import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from '@gull/components';

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavigationComponent],
  template: ` <gull-navigation>
    <router-outlet></router-outlet>
  </gull-navigation>`,
})
export class AppComponent {}
