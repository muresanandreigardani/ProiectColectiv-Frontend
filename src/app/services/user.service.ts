import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';


@Injectable()
export class UserService {
    public url = '';
    public httpOptions;

    constructor(private httpClient: HttpClient) {
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };
    }


    public login(username: string, password: string): Observable<any> {
        return of(2);
        // return this.httpClient.post<any>(this.url, { "username": username, "password": password }, this.httpOptions);
    }

}