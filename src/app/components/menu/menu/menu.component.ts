import { Component,Input,OnInit } from '@angular/core';
import { MenuItemModel } from '../models/MenuItemModel';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() hero : {
    title:string |undefined;
    icon:string | undefined;
  };
  constructor() {}
  ngOnInit(): void {
    // console.warn(this.hero)
    }
}
