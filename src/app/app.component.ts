import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: number = 0;

  constructor() {
    this.changeName(Math.ceil(Math.random() * 10));
  }

  changeName(name: number): void {
    this.name = name;
  }
}
