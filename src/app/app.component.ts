import { Component } from '@angular/core';
import { MenuItem } from './components/menu/MenuItem';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'second';
  constructor() {}

  items: MenuItem[] = [
    new MenuItem('Users1', './assets/link.png'),
    new MenuItem('Users2', './assets/link.png'),
    new MenuItem('Users3', './assets/link.png'),
  ];
}
