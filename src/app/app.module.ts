import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContentContactsComponent } from './components/contacts/content-contacts/content-contacts.component';
import { ContentAboutComponent } from './components/about/content-about/content-about.component';


const appRoutes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'about', component: ContentAboutComponent },
  { path: 'contacts', component: ContentContactsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentContactsComponent,
    ContentAboutComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
  // { path:  'contacts', component:  ContactListComponent}
})
export class AppModule {}
