import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { LoginComponent } from './authentication/login/login.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UserAPI } from './authentication/data/api/user.api';
import { AdvertListComponent } from './advertisement/advert/list/advert-list.component';
import { AdvertDetailsComponent } from './advertisement/advert/details/advert-details.component';
import { AdvertEditComponent } from './advertisement/advert/edit/advert-edit.component';
import { UserProfileComponent } from './authentication/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    AdvertListComponent,
    AdvertDetailsComponent,
    AdvertEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'register', component: RegistrationComponent},
      {path: 'login', component: LoginComponent},
      {path: 'home', component: AdvertListComponent},
      {path: 'profile', component: UserProfileComponent},
      {path: 'checkout', component: AdvertDetailsComponent},
    ]),
    InMemoryWebApiModule.forRoot(UserAPI)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
