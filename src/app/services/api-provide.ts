import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { TV_SERIES } from '../apis/binge-watch.mock';
import { of, Observable, throwError } from "rxjs";
import { AuthService } from './authentication.service';
import { Token } from '../models/Token';
import { catchError } from 'rxjs/operators';
import { AlertService } from './alert.service';
import { TvSeries, Season } from '../models/tvSeries';

@Injectable()
export class ApiProvider {
    public url = "http://192.168.1.6:8080/";
    public httpOptions;
    public serials: TvSeries[] = [];

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
        return this.getAllSerials();
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
    private handleAddError(errorRespone: HttpErrorResponse) {
        if (errorRespone instanceof ErrorEvent) {
            console.error('Clint side error:', errorRespone.error.message);
        } else {
            console.error('Server side error:', errorRespone.error.message);
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
        console.log('---------------------------------all Series');
        console.log(this.authService.token);
        this.httpOptions.headers = new HttpHeaders({
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + this.authService.token
        });

        return this.httpClient.get<any>(this.url + "series", this.httpOptions);
    }

    public addSeries(series: TvSeries) {
        console.log('---------------------------------add Series');
        console.log(this.authService.token);
        this.httpOptions.headers = new HttpHeaders({
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + this.authService.token
        });
        return this.httpClient.post<any>(this.url + "series", {
            "name": series.name,
            "image": series.image,
            "genres": series.description,
            "noOfSeasons": series.noSeasons,
            "noOfEpisodes": series.noEpisodes,
            "director": "Director",
            "releaseYear": "2020",
        }, this.httpOptions)
            .pipe(
                catchError(this.handleAddError)
            );

    }


    public addNewSeason(season: Season, idSerial: string) {
        console.log('---------------------------------add Season');
        console.log(this.authService.token);
        this.httpOptions.headers = new HttpHeaders({
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + this.authService.token
        });
        console.log(this.url + "seasons");
        return this.httpClient.post<any>(this.url + "seasons", {
            "name": season.name,
            "generalDescription": season.image,
            "number": season.noEpisodes,
            "serialId": idSerial,
        }, this.httpOptions)
            .pipe(
                catchError(this.handleAddError)
            );
    }

}