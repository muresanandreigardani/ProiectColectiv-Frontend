import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { TV_SERIES } from '../apis/binge-watch.mock';
import { of, Observable, throwError } from "rxjs";
import { AuthService } from './authentication.service';
import { Token } from '../models/Token';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiProvider {
    public url = "http://192.168.1.6:8080/";
    public httpOptions;

    constructor(
        private httpClient: HttpClient,
        private authService: AuthService
    ) {

        this.httpOptions = {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        };
    }

    public getSerialsName() {
        return TV_SERIES.map(x => x.name);
    }

    public login(username: string, password: string): Observable<any> {
        console.log(this.url + "authenticate");
        return this.httpClient.post<Token>(this.url + "authenticate", { "username": username, "password": password }, this.httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(errorRespone: HttpErrorResponse) {
        if (errorRespone instanceof ErrorEvent) {
            console.error('Clint side error:', errorRespone.error.message);
        } else {
            console.error('Server side error:', errorRespone.error.message);
        }
        return throwError('Is an error with the service! Sorry for inconvenience!');
    }

    public getAllMovies() {
        console.log('---------------------------------all Movies');
        console.log(this.authService.token);
        this.httpOptions.headers = new HttpHeaders({
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + this.authService.token
        });

        this.httpClient.get<any>(this.url + "movies", this.httpOptions).subscribe(data => {
            console.log(data);
        });

    }

}