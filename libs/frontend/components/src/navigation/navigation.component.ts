import {
  ChangeDetectionStrategy,
  Component,
  PLATFORM_ID,
  computed,
  inject,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'gull-navigation',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,

    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatListModule,
  ],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  breakpointObserver = inject(BreakpointObserver);
  platform = inject(PLATFORM_ID);

  isHandset = toSignal(
    this.breakpointObserver
      .observe(['(max-width: 959.98px)'])
      .pipe(map((result) => result.matches)),
  );
  isServer = isPlatformBrowser(this.platform) === false;
  showSidenav = computed(
    () => this.isHandset() === false && this.isServer === false,
  );

  loading = false;
}
