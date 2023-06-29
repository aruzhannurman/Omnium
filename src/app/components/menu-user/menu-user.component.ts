import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.scss'],
})
export class MenuUserComponent {
  @Input() profilePhoto: string;
  @Input() name: string;
  @Input() role: string;
}
