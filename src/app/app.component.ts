import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'United UI Web Components with Angular';
  textInputValue: string = '';
  switchValue = false;
  checkboxValue = false;
  checkboxes = [
    {
      id: 'cb-1',
      name: 'uui-cb-1',
      value: '1',
      label: 'Tab 1',
      disabled: false,
      error: false,
      checked: false
    },
    {
      id: 'cb-2',
      name: 'uui-cb-2',
      value: '2',
      label: 'Tab 2',
      disabled: false,
      error: false,
      checked: true
    },
    {
      id: 'cb-2',
      name: 'uui-cb-2',
      value: '2',
      label: 'Tab 3 (disabled)',
      disabled: true,
      error: false,
      checked: false
    },
    {
      id: 'cb-2',
      name: 'uui-cb-2',
      value: '2',
      label: 'Tab 4 (error)',
      disabled: false,
      error: true,
      checked: false
    }
  ];
  radioButtonSelectedValue = '';
  radiobuttons = [
    {
      value: 'rb-value-1',
      label: 'Label 1'
    },
    {
      value: 'rb-value-2',
      label: 'Label 2'
    }
  ];

  public handleRadioSelect(value: string) {
    this.radioButtonSelectedValue = value;
  }

  public makeRadioId(value: string) {
    return `uui-rb__${value}`;
  }

  public handleButtonClick() {
    alert('Button clicked');
  }
}
