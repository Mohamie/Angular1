import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdvertEditComponent } from './edit/advert-edit.component';
import { AdvertAccessGuard } from './guards/advert-access.guard';
import { AdvertDetailsComponent } from './details/advert-details.component';
import { AdvertListComponent } from './list/advert-list.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'checkout/:advertId', canActivate: [AdvertAccessGuard], component: AdvertDetailsComponent},
     
      {path: 'home', component: AdvertListComponent}
    ])
  ],
  exports: [RouterModule]
})
export class AdvertRoutingModule { }
