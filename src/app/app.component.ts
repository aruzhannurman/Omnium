import { Component } from '@angular/core';
import { MenuItemModel } from './components/menu/models/MenuItemModel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'second';

  items: MenuItemModel[] = [
    new MenuItemModel('Users1', './assets/link.png'),
    new MenuItemModel('Users2', './assets/link.png'),
    new MenuItemModel('Users3', './assets/link.png'),
  ];
}

