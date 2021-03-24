import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvertAccessGuard implements CanActivate, CanDeactivate<unknown> 
{

  constructor(private route: Router){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {

    //[0] - is the route path [1] - is route parameter, id in this case
    let id = +route.url[1].path;

    //if id isn't a number or is negative 
    if(isNaN(id) || id < 1)
    {
      //redirect to 404 Page
      alert('Invalid id')

      return false;
    }

    console.log('canActivate')
    //check if user is logged in
    let isUserLogged = localStorage.getItem("loggedUser") == null ? false : true;

    
    if(!isUserLogged)
    {
      alert('Oops! Please login to do this operation...')

      return false;
    }


    return true;
  }
  
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
    return true;
  }
  
}
