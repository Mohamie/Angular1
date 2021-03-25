import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './authentication/data/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
  loggedUser: User;

  constructor(private router: Router){}


  get isLoggedUser() : boolean
  {
    return localStorage.getItem("loggedUser") == null ? false : true;
  }

  get getLoggedUsername() : string
  {
    this.loggedUser = <User>JSON.parse(localStorage.getItem("loggedUser"));

    return this.loggedUser.fornames;
  }

  logout() : void
  {

    if(confirm("Are you sure you want to be logged out?"))
    {
      localStorage.clear();
      this.loggedUser = null;
  
      this.router.navigate(['/home']);
    }
    
  }
  
}
