import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MenuItemModel } from './components/menu/models/MenuItemModel';


import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { MenuComponent } from './components/menu/menu/menu.component';
import { MenuItemsComponent } from './components/menu_items/menu-items/menu-items.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    MenuComponent,
    MenuItemsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
