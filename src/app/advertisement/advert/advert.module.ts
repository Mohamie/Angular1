import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertListComponent } from './list/advert-list.component';
import { AdvertEditComponent } from './edit/advert-edit.component';
import { AdvertDetailsComponent } from './details/advert-details.component';
import { AdvertRoutingModule } from './advert-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdvertListComponent,
    AdvertDetailsComponent,
    AdvertEditComponent,
    UserListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdvertRoutingModule
  ],

  exports: [
    UserListComponent,
    CommonModule,
    FormsModule
  ]
})

export class AdvertModule { }
