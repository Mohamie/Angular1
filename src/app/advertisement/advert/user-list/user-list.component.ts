import { Component, Input, OnInit } from '@angular/core';
import { Advert } from '../../data/models/advert';
import { AdvertService } from '../../data/services/advert.service';

@Component({
  selector: 'store-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit 
{
  adverts: Advert[];
  
  @Input() loggedUserEmail: string; 

  constructor(private advertService: AdvertService) { }

  ngOnInit(): void 
  {
    this.advertService.getUserByEmail(this.loggedUserEmail).subscribe(
      {
        next: userAdverts => this.adverts = userAdverts,
        error: err => console.log(err)
        
      }
    )
  }

}
