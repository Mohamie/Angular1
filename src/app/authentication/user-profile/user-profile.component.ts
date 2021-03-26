import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Advert } from 'src/app/advertisement/data/models/advert';
import { AdvertService } from 'src/app/advertisement/data/services/advert.service';
import { User } from '../data/models/user';

@Component({
  selector: 'store-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit 
{
  loggedUser: User;
  userAdverts: Advert[];

  constructor(private advertService: AdvertService, private route: Router) { }

  ngOnInit(): void 
  {
      this.loggedUser = <User>JSON.parse(localStorage.getItem("loggedUser"));

      this.advertService.getUserByEmail(this.loggedUser.email).subscribe(
        {
          next: adverts => this.userAdverts = adverts,
          error: err => console.log(err)
        }
      )
  }

  deleteAdvert(item: Advert) : void
  {
    if(confirm(`Are you sure you want to delete ${item.title}?`))
    {
      this.advertService.deleteAdvert(item.id).subscribe(
        {
          next: () => this.userAdverts.splice(this.userAdverts.indexOf(item), 1),
          error: () => console.log('Item not deleted')
        }
      )
    }
  }

}
