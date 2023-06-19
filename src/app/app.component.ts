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
    new MenuItem('Contacts', './assets/link.png','/contacts'),
    new MenuItem('About', './assets/link.png','/about'),
    new MenuItem('Users3', './assets/link.png',''),
  ];
}
