import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { TV_SERIES } from '../apis/binge-watch.mock';
import { of, Observable, throwError } from "rxjs";
import { AuthService } from './authentication.service';
import { Token } from '../models/Token';
import { catchError } from 'rxjs/operators';
import { AlertService } from './alert.service';

@Injectable()
export class ApiProvider {
    public url = "http://localhost:8080/";
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
        this.httpOptions.headers = new HttpHeaders({
            "Content-Type": "application/json",
        });
        return this.httpClient.post<Token>(this.url + "authenticate", { "username": username, "password": password }, this.httpOptions)
            .pipe(
                catchError(this.handleLoginError)
            );
    }

    public register(username: string, password: string): Observable<any> {
        console.log(this.url + "register");
        this.httpOptions.headers = new HttpHeaders({
            "Content-Type": "application/json",
        });
        return this.httpClient.post<any>(this.url + "register", { "username": username, "password": password }, this.httpOptions)
            .pipe(
                catchError(this.handleRegisterError)
            );
    }

    private handleLoginError(errorRespone: HttpErrorResponse) {
        if (errorRespone instanceof ErrorEvent) {
            console.error('Clint side error:', errorRespone.error.message);
        } else {
            console.error('Server side error:', errorRespone.error.message);
            alert("Authentication failed!");
        }
        return throwError('Is an error with the service! Sorry for inconvenience!');
    }
    private handleRegisterError(errorRespone: HttpErrorResponse) {
        if (errorRespone instanceof ErrorEvent) {
            console.error('Clint side error:', errorRespone.error.message);
        } else {
            console.error('Server side error:', errorRespone.error.message);
            alert("Register failed!");
        }
        return throwError('Is an error with the service! Sorry for inconvenience!');
    }

    public getAllMovies(): Observable<any> {
        console.log('---------------------------------all Movies');
        console.log(this.authService.token);
        this.httpOptions.headers = new HttpHeaders({
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + this.authService.token
        });

        return this.httpClient.get<any>(this.url + "movies", this.httpOptions);
    }

    public getAllSerials(): Observable<any> {
        console.log('---------------------------------all Serials');
        console.log(this.authService.token);
        this.httpOptions.headers = new HttpHeaders({
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + this.authService.token
        });

        return this.httpClient.get<any>(this.url + "series", this.httpOptions);
    }

}