import { NgModule } from '@angular/core';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    UserProfileComponent
  ],
  imports: [
   
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
