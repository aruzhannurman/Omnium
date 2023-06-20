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
    new MenuItem('Browse Courses', './assets/home.svg', false),
    new MenuItem('About', './assets/link.png', false),
    new MenuItem('Browse Paths', './assets/link.png', false),
  ];
}
