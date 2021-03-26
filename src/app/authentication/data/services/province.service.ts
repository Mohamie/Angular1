import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { IProvince } from "../models/province";

@Injectable({
    providedIn: 'root'
})

export class ProvinceService
{
    private url = 'api/provinces';

    constructor(private http: HttpClient){}

    getProvinces() : Observable<IProvince[]>
    {
        return this.http.get<IProvince[]>(this.url).pipe(
            tap(() => console.log(`Province loaded`)),
            catchError(this.onError)
        )
    }

    getProviceById(id: number) : Observable<IProvince>
    {
        const url = `${this.url}/${id}`;

        return this.http.get<IProvince>(url).pipe(
            
            tap(() => console.log(`Province Loaded`)),
            
            catchError(this.onError)
        )
    }

    private onError(err: HttpErrorResponse)
    {
        return throwError(err);
    }


}