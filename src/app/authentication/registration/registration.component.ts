import { Component, OnInit } from '@angular/core';
import { UserService } from '../data/services/user.service';
import { User } from '../data/models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { IProvince } from '../data/models/province';
import { ProvinceService } from '../data/services/province.service';
import { FormValidations } from 'src/app/shared/custom.validations';
import { Address } from '../data/models/address';
import { Router } from '@angular/router';

@Component({
  selector: 'store-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit
{
  userForm: FormGroup;
  provinces: IProvince[];
  newUser: User;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private provinceService: ProvinceService, private router: Router) { }

  ngOnInit(): void 
  {

    this.buildUserForm();
    this.setProvinces();

  }

  setProvinces() : void
  {
    this.provinceService.getProvinces().subscribe(
      {
        next: p => this.provinces = p,
        error: () => console.log('Could not get Provinces')
      }
    )
  }

  buildUserForm() : void
  {
     this.userForm = this.formBuilder.group({

      fornames: ['', [Validators.required, Validators.minLength(2)]],
      surname: ['', [Validators.required, Validators.minLength(2)]],

      emailGroup: this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', Validators.required]
      }, {validator: FormValidations.emailMatcher}),

      passwordGroup: this.formBuilder.group({
        password: ['', [Validators.required, Validators.minLength(5)]],
        confirmPassword: ['', Validators.required]
      }, {validator: FormValidations.passwordMatcher}),
      
      deliveryAddress: this.formBuilder.group({
        street: ['', [Validators.required]],
        complex:[''],
        surburb: ['', [Validators.required]],
        town:['', [Validators.required]],
        province:[, [Validators.required]],
        postalCode:[, [Validators.required]]

      })

    })
  }

  registerUser() : void
  {
    if(this.userForm.valid)
    {
      //copy 
      let fornames: string = this.userForm.get('fornames').value;
      let surname: string = this.userForm.get('surname').value;
      let email: string = this.userForm.get('emailGroup.email').value;
      let password: string = this.userForm.get('passwordGroup.password').value;

      let street: string = this.userForm.get('deliveryAddress.street').value; 
      let complex: string = this.userForm.get('deliveryAddress.complex').value; 
      let surburb: string = this.userForm.get('deliveryAddress.surburb').value; 
      let town: string = this.userForm.get('deliveryAddress.town').value; 
      let province: string = this.userForm.get('deliveryAddress.province').value; 
      let postalCode: number = this.userForm.get('deliveryAddress.postalCode').value;
     
     let address: Address = new Address();
     address.street = street;
     address.complex = complex;
     address.surburb = surburb;
     address.town = town;
     address.province = province;
     address.postalCode = postalCode;

     let newUser: User = new User(null, fornames.trim(), surname.trim(), email.trim(), password.trim(), address);
     
     this.userService.createUser(newUser).subscribe(
       {
         next: () => this.onSaveComplete(),
         error: () => console.log('User not registered')
       }
     ) 
    }

  }

  onSaveComplete() : void
  {
      this.userForm.reset();

      this.router.navigate(['/login']);
  }

}
