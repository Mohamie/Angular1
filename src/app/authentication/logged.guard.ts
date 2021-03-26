import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoggedGuard implements CanActivate 
{

  constructor(private router: Router){}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {

    //check if user is logged in
    let isUserLogged = localStorage.getItem("loggedUser") == null ? false : true;

        
    if(isUserLogged)
    {
      alert('Oops! Please logout to do this operation...')
      this.router.navigate(['/home'])
      return false;
    }


    return true;
  }
  
}
