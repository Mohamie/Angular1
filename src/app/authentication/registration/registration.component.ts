import { Component, OnInit } from '@angular/core';
import { UserService } from '../data/services/user.service';
import { User } from '../data/models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'store-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit
{
  userForm: FormGroup;

  constructor(private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit(): void 
  {

    this.buildUserForm();
    
  }

  buildUserForm() : void
  {
     this.userForm = this.formBuilder.group({

      fornames: ['', [Validators.required, Validators.minLength(3)]],
      surname: [''],

      emailGroup: this.formBuilder.group({
        email: [''],
        confirmEmail: ['']
      }),

      passwordGroup: this.formBuilder.group({
        password: [''],
        confirmPassword: ['']
      }),
      
      deliveryAddresses: this.formBuilder.array([this.buildAddress()])

     })
  }

  buildAddress() : FormGroup
  {
     return this.formBuilder.group({
       street: [''],
       complex: [''],
       suburb: [''],
       town: [''],
       postalCode: [''],
       province: [] 
     })
  }

}
