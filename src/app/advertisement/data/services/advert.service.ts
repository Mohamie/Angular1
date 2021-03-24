import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core'
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Advert } from '../models/advert';

@Injectable({
    providedIn: 'root'
})

export class AdvertService
{
    private advertUrl = 'api/adverts';
    private headers = new HttpHeaders({'Content-Type' : 'application/json'});

    constructor(private http: HttpClient){}

    //get adverts
    getAdverts() : Observable<Advert[]>
    {
        return this.http.get<Advert[]>(this.advertUrl).pipe(
            
            tap(data => console.log(`Results: ${JSON.stringify(data)}`)),
            
            catchError(this.onError)
        );
    }
    
    //get Advert By ID
    getAdvertById(id: number) : Observable<Advert>
    {
        
        const url = `${this.advertUrl}/${id}`;

        return this.http.get<Advert>(url).pipe(
            
            tap(data => console.log(`Result: ${JSON.stringify(data)}`)),
            
            catchError(this.onError)
        )
    }

    //get Adverts by logged User
    getUserByEmail(userEmail: string) : Observable<Advert[]>
    {
        return this.http.get<Advert[]>(this.advertUrl).pipe(

            map((adverts: Advert[]) => adverts.filter(advert => advert.userEmail === userEmail)),
            
            catchError(this.onError)
        );
    }
    
    //save Advert
    createAdvert(advert: Advert) : Observable<Advert>
    {

        advert.id = null; //clear for API to auto assign

        return this.http.post<Advert>(this.advertUrl, {headers: this.headers}).pipe(
            tap(data => console.log(`New Advert: ${JSON.stringify(data)}`)),
            catchError(this.onError)
        );
    }
    
    //update Advert
    updateAdvert(advert: Advert) : Observable<Advert>
    {
        const url = `${this.advertUrl}/${advert.id}`;
        
        return this.http.put<Advert>(url, {headers :this.headers }).pipe(
            tap(data => console.log(`Advert with id - ${advert.id} Updated `)),
            catchError(this.onError)
            );
    }   
        
    //delete Advert
    deleteAdvert(id: Advert) : Observable<{}>
    {
        const url = `${this.advertUrl}/${id}`;
            
        return this.http.delete<Advert>(url, {headers: this.headers}).pipe(
            tap(() => console.log('Advert Deleted')),
            catchError(this.onError)
        );
    }
   
    //error Handle
    private onError(err: HttpErrorResponse) 
    {
        return throwError(err);
    }
}