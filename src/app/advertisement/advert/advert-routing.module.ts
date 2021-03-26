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
    RouterModule.forChild([
      {path: 'checkout/:advertId', canActivate: [AdvertAccessGuard], component: AdvertDetailsComponent}
    ])
  ],
  exports: [RouterModule]
})
export class AdvertRoutingModule { }
