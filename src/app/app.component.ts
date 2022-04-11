import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uui-angular';
  username: string = '';

  public handleButtonClick() {
    console.log('username', this.username);
    alert('Button clicked');
  }
}
