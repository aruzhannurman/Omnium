import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PaymentComponent } from './components/payment/payment.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { InfoComponent } from './components/info/info.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuUserComponent } from './components/menu-user/menu-user.component';

const appRoutes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'lessons', component: LessonsComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'info', component: InfoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProfileComponent,
    PaymentComponent,
    LessonsComponent,
    InfoComponent,
    HeaderComponent,
    FooterComponent,
    MenuUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  // { path:  'contacts', component:  ContactListComponent}
})
export class AppModule {}
