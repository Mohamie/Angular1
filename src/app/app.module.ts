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
import { UserProfileComponent } from './authentication/user-profile/user-profile.component';
import { AdvertModule } from './advertisement/advert/advert.module';
import { AdvertAPI } from './advertisement/data/api/advert.api';
import { ShopALotAPI } from './shared/api/shop-a-lot.api';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AdvertModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'register', component: RegistrationComponent},
      {path: 'login', component: LoginComponent},
      {path: 'profile', component: UserProfileComponent}
    ]),
    InMemoryWebApiModule.forRoot(ShopALotAPI)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
