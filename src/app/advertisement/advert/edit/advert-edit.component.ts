import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Advert } from '../../data/models/advert';
import { AdvertService } from '../../data/services/advert.service';

@Component({
  selector: 'store-advert-edit',
  templateUrl: './advert-edit.component.html',
  styleUrls: ['./advert-edit.component.css']
})
export class AdvertEditComponent implements OnInit, OnDestroy 
{
  advert: Advert;
  advertForm: FormGroup;

  pageTitle: string;

  sub: Subscription;

  constructor(private advertService: AdvertService, private activatedRoute: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void 
  {
    //get paramater and pass to setAdvert
    this.setParamToObject()

    //initialize FormModule
    this.initFormModel();
  }

  ngOnDestroy() : void
  {
    this.sub.unsubscribe();
  }

  initFormModel() : void
  {
    this.advertForm = this.formBuilder.group(
      {
        title: ['', [Validators.required]],
        price: ['', [Validators.required]],
        description: ['', [Validators.required]]
      }
    )
  }

  setParamToObject() : void
  {
    this.sub = this.activatedRoute.paramMap.subscribe(
      params => {
          let id = +params.get('advertId');

          this.setAdvert(id);
      }
    )
  }

  setAdvert(advertId: number) : void
  {
    this.advertService.getAdvertById(advertId).subscribe(
      {
        next: advert => 
        {  
          this.advert = advert
          this.displayAdvert(this.advert);
        },
        error: err => console.log(`Error while getting Advert id ${advertId}`)
      }
    )
  }

  saveAdvert() : void
  {
    if(this.advertForm.valid)
    {
      if(this.advertForm.dirty)
      {
        //append changes to product Object
        const _advert = {...this.advert, ...this.advertForm.value};

        if(_advert.id === 0)
        {
        
          //create new Advert
          this.advertService.createAdvert(_advert).subscribe(
            {
              next: () => this.onSavedComplete(),
              error: () => console.log("Something went wrong while saving data!!")
            }
          )
        }
        else
        {
          //update Product
          this.advertService.updateAdvert(_advert).subscribe({
            next: () => this.onSavedComplete(),
            error: err => console.log(`Error on While Updating Product --> ${err}`)
          })
        }
      }
    }
  }


  displayAdvert(advert: Advert) : void
  {
      //if its not nullable(contains data)
      if(this.advertForm)
      {
        this.advertForm.reset()
      }

      //update Page Title according to editing or adding new product
      this.pageTitle = advert.id == 0 ?  "Add Item" : `Edit Item: ${advert.title}`;
      
      this.advertForm.patchValue({
        title: advert.title,
        price: advert.price,
        description: advert.description
      });

  }

  deleteAdvert() : void
  {
      if(confirm(`Are you sure you want to delete ${this.advert.title}?`))
      {
        this.advertService.deleteAdvert(this.advert.id).subscribe(
          {
            next: () => this.onSavedComplete(),
            error: () => console.log('Advert Not Deleted ')
          }
        );
      }

  }

  onSavedComplete() : void
  {
    this.advertForm.reset();

    this.router.navigate(['/profile']);
  }



}
