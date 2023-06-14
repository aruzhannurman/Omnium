import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  {
  @Input() menuItems : {
    title:string |undefined;
    icon:string | undefined;
  };
  constructor() {}
  
}
