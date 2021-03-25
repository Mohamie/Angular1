import { Component, OnInit } from '@angular/core';
import { User } from '../data/models/user';

@Component({
  selector: 'store-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit 
{
  loggedUser: User;

  constructor() { }

  ngOnInit(): void 
  {
      this.loggedUser = <User>JSON.parse(localStorage.getItem("loggedUser"));
  }

}
