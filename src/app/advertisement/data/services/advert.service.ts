import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core'
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { User } from 'src/app/authentication/data/models/user';
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
        //return cleared Advert instance if advert is to be added not updated 
        if(id === 0) return of(this.initializeAdvert());


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
        const headers = new HttpHeaders({'Content-Type' : 'application/json'});
        advert.id = null; //clear for API to auto assign

        return this.http.post<Advert>(this.advertUrl, advert, {headers: headers}).pipe(
            tap(data => console.log(`New Advert: ${JSON.stringify(data)}`)),
            catchError(this.onError)
        );
    }
    
    //update Advert
    updateAdvert(advert: Advert) : Observable<Advert>
    {
        const url = `${this.advertUrl}/${advert.id}`;
        
        return this.http.put<Advert>(url, advert, {headers :this.headers }).pipe(
            tap(data => console.log(`Advert with id - ${advert.id} Updated `)),
            catchError(this.onError)
            );
    }   
        
    //delete Advert
    deleteAdvert(id: number) : Observable<{}>
    {
        const url = `${this.advertUrl}/${id}`;
            
        return this.http.delete<Advert>(url, {headers: this.headers}).pipe(
            tap(() => console.log('Advert Deleted')),
            catchError(this.onError)
        );
    }
   
    initializeAdvert() : Advert
    {
        return {
            id: 0,
            title: null,
            description: null,
            price: null,
            dateCreated: new Date(),
            userEmail: (JSON.parse(localStorage.getItem("loggedUser")) as User).email  
        }
    }

    //error Handle
    private onError(err: HttpErrorResponse) 
    {
        return throwError(err.error.message);
    }
}