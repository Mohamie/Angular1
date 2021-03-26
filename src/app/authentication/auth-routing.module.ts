import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserAdvertsGuard } from './user-profile/user-adverts.guard';
import { AdvertEditComponent } from '../advertisement/advert/edit/advert-edit.component';
import { LoggedGuard } from './logged.guard';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {path: 'register', component: RegistrationComponent, canActivate: [LoggedGuard]},
      {path: 'login', component: LoginComponent, canActivate: [LoggedGuard]},
      {path: 'profile', component: UserProfileComponent},
      {path: 'profile/advert/edit/:advertId', canDeactivate: [UserAdvertsGuard], component: AdvertEditComponent}
    ])
  ],
  exports: [RouterModule]

})
export class AuthRoutingModule { }
