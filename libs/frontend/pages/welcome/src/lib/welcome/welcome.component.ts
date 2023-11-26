import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { delay, map, of } from 'rxjs';

@Component({
  selector: 'heavy-component',
  standalone: true,
  imports: [CommonModule],
  template: `
    HEAVY LOADED:
    <p>{{ title$ | async }}</p>
  `,
})
export class HeavyComponent {
  title$ = of('Heavy Component').pipe(
    delay(1000),
    map((title) => `${title} loaded!`)
  );
}

@Component({
  standalone: true,
  imports: [CommonModule, HeavyComponent],
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent {}
