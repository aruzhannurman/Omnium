import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.scss'],
})
export class MenuUserComponent {
  profilePhoto: string ='assets/sidebarUser/profilePic.png';
  name: string = 'Luma';
  role: string = 'Student';
}
