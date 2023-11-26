import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, take } from 'rxjs';

@Component({
  selector: 'heavy-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
})
export class HeavyComponent {
  title$ = interval(1000).pipe(
    map((i) => {
      return `Welcome to gull ${i}`;
    }),
    take(2)
  );
}

@Component({
  standalone: true,
  imports: [CommonModule, HeavyComponent],
  template: ` <p>{{ title }}</p> `,
})
export class WelcomeComponent {
  title = 'loading';

  constructor() {
    
    setTimeout(() => {
      this.title = 'Welcome to gull';
    }, 5000);
  }
}
