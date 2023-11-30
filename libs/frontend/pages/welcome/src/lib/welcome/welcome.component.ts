import { CommonModule } from '@angular/common';
import { Component, OnInit, afterNextRender, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'some-component',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>{{ title }}</p>
    {{ cats$ | async | json }}
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
})
export class WelcomeComponent {}
