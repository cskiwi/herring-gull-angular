import { CommonModule } from '@angular/common';
import { Component, afterNextRender } from '@angular/core';

@Component({
  selector: 'heavy-component',
  standalone: true,
  imports: [CommonModule],
  template: `
    HEAVY LOADED:
    <p>{{ title }}</p>
  `,
})
export class HeavyComponent {
  title: string = 'Heavy Component';

  constructor() {
    afterNextRender(() => {
      this.title = 'Heavy Component Loaded';
    });
  }
}

@Component({
  standalone: true,
  imports: [CommonModule, HeavyComponent],
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent {}
