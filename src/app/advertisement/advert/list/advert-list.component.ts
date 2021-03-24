import { Component, OnInit } from '@angular/core';
import { Advert } from '../../data/models/advert';
import { AdvertService } from '../../data/services/advert.service';

@Component({
  templateUrl: './advert-list.component.html',
  styleUrls: ['./advert-list.component.css']
})
export class AdvertListComponent implements OnInit 
{
  adverts: Advert[];

  constructor(private advertService: AdvertService) { }

  ngOnInit(): void 
  {
      this.advertService.getAdverts().subscribe(
        {
          next: adverts =>
          {
            this.adverts = adverts
          },
          error: err => console.error(err)
        }
      );

  }

}
