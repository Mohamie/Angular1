import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { LoginComponent } from './authentication/login/login.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AdvertModule } from './advertisement/advert/advert.module';

import { ShopALotAPI } from './shared/api/shop-a-lot.api';
import { AuthModule } from './authentication/auth.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    AdvertModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(ShopALotAPI)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
