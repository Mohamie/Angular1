import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdvertEditComponent } from 'src/app/advertisement/advert/edit/advert-edit.component';

@Injectable({
  providedIn: 'root'
})
export class UserAdvertsGuard implements CanActivate, CanDeactivate<unknown> {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {

    // profile/advert/edit/:advertId -> [3]
    let id = +route.url[3].path;

    //if id isn't a number or is negative 
    if(isNaN(id) || id < 1)
    {
      //redirect to 404 Page
      alert('Invalid id')

      return false;
    }

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
    component: AdvertEditComponent): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {

    if(component.advertForm.dirty)
    {
      const title = component.advertForm.get('title').value || "New Item";

      return confirm(`Navigate away and lose all changes to ${title}`);
    }


    return true;
  }
  
}
