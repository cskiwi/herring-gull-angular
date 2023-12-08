import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from '@gull/components';
import { fader } from './app.transistions';

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavigationComponent],
  template: ` <gull-navigation>
    <div [@routeAnimations]="prepareRoute(outlet)">
      <router-outlet #outlet="outlet"></router-outlet>
    </div>
  </gull-navigation>`,
  animations: [fader],
  // styleUrls: ['../styles.scss'],
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
