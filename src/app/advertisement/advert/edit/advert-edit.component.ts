import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Advert } from '../../data/models/advert';
import { AdvertService } from '../../data/services/advert.service';

@Component({
  templateUrl: './advert-edit.component.html',
  styleUrls: ['./advert-edit.component.css']
})
export class AdvertEditComponent implements OnInit, OnDestroy 
{
  advert: Advert;
  sub: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private advertService: AdvertService) { }

  ngOnInit(): void 
  {
      this.subscribeToObservers();
  }

  ngOnDestroy() : void
  {
      this.sub.unsubscribe();
  }

  subscribeToObservers() : void
  {
    this.sub = this.activatedRoute.paramMap.subscribe(
      params => 
      {
        const advertId = +params.get('advertId');
        
        this.setAdvert(advertId);
      }
    );

  }
    
  setAdvert(id: number) : void
  {
    this.advertService.getAdvertById(id).subscribe(
      {
        next: advert => this.advert = advert,
        error: err => console.log(`Error: ${err}`)
      }
    );
  
    
  }

}
