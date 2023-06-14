import { Component, Input } from '@angular/core';
import { MenuItem } from './MenuItem';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})

export class MenuComponent {
  @Input() menuItems: MenuItem[];
}
