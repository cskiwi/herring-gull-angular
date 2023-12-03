import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'some-component',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  template: `
    <p>{{ title }}</p>
    {{ cats$ | async | json }}

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

  cats$ = this.httpClient.get('/api/cats');
  title: string = 'Some Component started';

  ngOnInit(): void {
    this.title = 'Some Component Loaded';
  }
}

@Component({
  standalone: true,
  imports: [CommonModule, HeavyComponent],
  template: `
    <h1>Load on server</h1>
    <some-component></some-component>

    @defer {
    <h1>Load on client</h1>
    <some-component></some-component>
    } @placeholder {
    <!-- placeholder template fragment -->
    <p>Placeholder</p>
    } @loading {
    <!-- loading template fragment -->
    <p>Loading...</p>
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
  `
})
export class WelcomePageComponent {
  title = inject(Title);

  constructor() {
    this.title.setTitle('Welcome!');
  }
}
