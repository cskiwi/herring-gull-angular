import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  standalone: true,
  imports: [],
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page2Component {}
