import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdvertListComponent } from './advertisement/advert/list/advert-list.component';
import { PageNotFoundComponent } from './shared/page-not-found.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      {path: 'home', component: AdvertListComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
