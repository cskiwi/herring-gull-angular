import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page1Component {}
