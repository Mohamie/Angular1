import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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
            tap(data => console.log(`Users: ${JSON.stringify(data)}`)),
            catchError(this.onError)
        )
    }

    getUserByEmail(email: string) : Observable<User>
    {

        return this.http.get<User[]>(this.url).pipe(
            map((users: User[]) => users.find(user => user.email === email)),
            catchError(this.onError)
        )
    }

    private onError(err: HttpErrorResponse) 
    {
        console.error(err);

        return throwError(err.error.message);
    }

    //get user by email
   
    //save/register user
    
    //sign in user (local Storage)
}