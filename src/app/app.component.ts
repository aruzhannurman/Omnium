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
    new MenuItem('Мой профиль', './assets/1.png', true, '/profile'),
    new MenuItem('Платежи', './assets/2.png', false, '/payment'),
    new MenuItem('Уроки', './assets/4.png', false, '/lessons'),
    new MenuItem('Инфомер', './assets/3.png', false, '/info'),
  ];
}
