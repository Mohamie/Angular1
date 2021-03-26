import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core'
import { User } from '../models/user';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class UserService
{
    
    private url = 'api/users';

    constructor(private http: HttpClient){}

    //get users
    getUsers() : Observable<User[]>
    {
        return this.http.get<User[]>(this.url).pipe(
            tap(() => console.log('')),
            catchError(this.onError)
        )
    }

    getUserByEmail(email: string) : Observable<User>
    {

        return this.http.get<User[]>(this.url).pipe(
            map((users: User[]) => users.find(user => user.email === email)),
            catchError(this.onError)
        );
    }

    createUser(user: User) : Observable<{}>
    {
        const headers = new HttpHeaders({'Content-Type' : 'application/json'});
        user.id = null; //clear for API to auto assign

        return this.http.post<User>(this.url, user, {headers: headers}).pipe(
            tap(() => console.log('New User registered')),
            catchError(this.onError)
        );
    }

    
    private onError(err: HttpErrorResponse) 
    {
        console.error(err);

        return throwError(err.error.message);
    }
    
}