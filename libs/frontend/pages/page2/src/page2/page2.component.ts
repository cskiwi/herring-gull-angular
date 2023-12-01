import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page2Component {}
