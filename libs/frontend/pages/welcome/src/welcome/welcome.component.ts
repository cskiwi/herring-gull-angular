import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'gull-some-component',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  template: `
    <p>{{ title }}</p>
    {{ cats() | json }}

    <mat-card>
      <mat-card-header>
        <mat-card-title>Some Component</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>Some Component Content</p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-stroked-button>Some Action</button>
      </mat-card-actions>
    </mat-card>
  `,
})
export class HeavyComponent implements OnInit {
  private httpClient = inject(HttpClient);
  cats = toSignal(this.httpClient.get('/api/cats'));

  title: string = 'Some Component started';

  ngOnInit(): void {
    this.title = 'Some Component Loaded';
  }
}

@Component({
  standalone: true,
  imports: [CommonModule, HeavyComponent],
  template: `
    <h1>Welcome to gull!</h1>

    <h2>Load on server</h2>
    <gull-some-component></gull-some-component>

    @defer {
      <h2>Load on client</h2>
      <gull-some-component></gull-some-component>
    } @placeholder {
      <!-- placeholder template fragment -->
      <p>Placeholder</p>
    } @error {
      <!-- error template fragment -->
      <p>An loading error occured</p>
    }
  `,
  styles: `
    :host{
      display: block;
      padding: 1rem;
    }
  `,
})
export class WelcomePageComponent {
  title = inject(Title);

  constructor() {
    this.title.setTitle('Welcome!');
  }
}
