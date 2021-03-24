import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core'
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Advert } from '../models/advert';

@Injectable({
    providedIn: 'root'
})

export class AdvertService
{
    private advertUrl = 'api/adverts';

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
        const headers = new HttpHeaders({'Content-Type' : 'application/json'});

        const url = `${this.advertUrl}/${id}`;

        return this.http.get<Advert>(url).pipe(
            tap(data => console.log(`Result: ${JSON.stringify(data)}`)),
            catchError(this.onError)
        )
    }

    //get Adverts by logged User

    //save Advert

    //delete Advert

    //update Advert



    //error Handle
    private onError(err: HttpErrorResponse) 
    {
        return throwError(err);
    }
}