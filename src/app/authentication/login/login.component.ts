import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../data/models/user';
import { UserService } from '../data/services/user.service';

@Component({
  selector: 'store-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  user: User =  new User(null, null, null, null, null, null);
  isLoading: boolean = false;
  isInvalid: boolean = false;
  errorMessage: string;
  

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void 
  {
  }

  onLogin(loginForm: NgForm) : void
  {
    if(!loginForm.valid) return

    //disable button
    this.showProgress(true);
    
    this.userService.getUserByEmail(this.user.email).subscribe(
      {
        next: _user => this.authUser(_user),
        error: err => this.errorMessage = err
      }
    )
    
  }

  authUser(user: User) : void
  {
    //check if user is valid
    if(user)
    {
      console.log(`User: ${user.fornames} ${user.surname} found`);
      
      if(user.password === this.user.password)
      {
        console.log(`User: ${user.fornames} ${user.surname} Logged in`);
        this.isAuthenticated(true);
        
        //save user data on Local Storage and redirect to main
        let user_serialized = JSON.stringify(user);
        
        localStorage.setItem("loggedUser", user_serialized);
  
        this.router.navigate(['/home']);
       
      }
      else
      {
        console.log(`User: Password not match`);
        this.isAuthenticated(false);
      }
      
    }
    else
    {
        this.isAuthenticated(false);
    }
  }

  isAuthenticated(authStatus: boolean) : void
  {
    this.showProgress(false);
    this.isInvalid = !authStatus;
  }

  showProgress(loading: boolean) : void
  {
    this.isLoading = loading;

    if(loading)
    {
      document.getElementById('btnLogin').setAttribute('disabled', loading ?  'disabled' : '');
    }
    else
    {
      document.getElementById('btnLogin').removeAttribute('disabled');
    }
    
  }

}
