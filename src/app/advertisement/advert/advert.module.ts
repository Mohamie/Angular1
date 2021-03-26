import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertListComponent } from './list/advert-list.component';
import { AdvertEditComponent } from './edit/advert-edit.component';
import { AdvertDetailsComponent } from './details/advert-details.component';
import { AdvertRoutingModule } from './advert-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AdvertListComponent,
    AdvertDetailsComponent,
    AdvertEditComponent,
    UserListComponent,
  ],
  imports: [
    SharedModule,
    AdvertRoutingModule
  ],

  exports: [
    UserListComponent
  ]
})

export class AdvertModule { }
