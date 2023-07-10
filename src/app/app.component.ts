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
    new MenuItem('Мой профиль', './assets/sidebar/1.png', true, '/profile'),
    new MenuItem('Платежи', './assets/sidebar/2.png', false, '/payment'),
    new MenuItem('Уроки', './assets/sidebar/4.png', false, '/lessons'),
    new MenuItem('Инфомер', './assets/sidebar/3.png', false, '/info'),
  ];

  profilePhoto: string = 'assets/sidebarUser/profilePic.png';
  name: string = 'Luma';
  role: string = 'Student';
}
