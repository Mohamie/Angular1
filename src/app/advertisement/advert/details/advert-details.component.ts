import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Advert } from '../../data/models/advert';
import { AdvertService } from '../../data/services/advert.service';

@Component({
  selector: 'store-advert-details',
  templateUrl: './advert-details.component.html',
  styleUrls: ['./advert-details.component.css']
})
export class AdvertDetailsComponent implements OnInit 
{
  advert: Advert;

  constructor(private activatedRoute: ActivatedRoute, private advertService: AdvertService) { }

  ngOnInit(): void 
  {
    let id = +this.activatedRoute.snapshot.paramMap.get('advertId');

    this.advertService.getAdvertById(id).subscribe(
      {
        next: advert => this.advert = advert,
        error: err => console.log(err)
      }
    )
  }

}
