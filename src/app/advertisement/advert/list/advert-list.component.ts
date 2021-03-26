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
  filteredAdverts: Advert[];
  searchValue: string;

  constructor(private advertService: AdvertService) { }

  ngOnInit(): void 
  {
      this.advertService.getAdverts().subscribe(
        {
          next: adverts =>
          {
            this.adverts = adverts;
            this.filteredAdverts = this.adverts;

          },
          error: err => console.error(err)
        }
      );

  }

  set filterAdvertsBySearch(value: string)
  {
    this.searchValue = value;
    this.filteredAdverts = this.searchValue ? this.performFiltering(this.searchValue) : this.adverts;  
  }

  performFiltering(filterBy: string) : Advert[]
  {
      filterBy = filterBy.toLocaleLowerCase();

      return this.adverts.filter((advert: Advert) => advert.title.toLocaleLowerCase().indexOf(filterBy) !== -1 || advert.description.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

}
