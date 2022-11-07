import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() disabled = false;
  @Input() type = 'button';
  @Input() set styling(value: string | '') {
    this.classList = {
      ...this.classList,
      ...{
        'app-button-number': value === 'number',
        'app-button-operator': value === 'operator',
        'app-button-equals': value === 'equals',
      },
    };
  }

  classList: Record<string, boolean> = {};

  constructor() {}
}
