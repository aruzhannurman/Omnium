import { Component, Input } from '@angular/core';
import { MenuItem } from './MenuItem';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() menuItems: MenuItem[];

  selectMenuItem(selectedItem: MenuItem): void {
    this.menuItems.forEach((item) => {
      item.isActive = false;
    });

    selectedItem.isActive = true;
  }
}
