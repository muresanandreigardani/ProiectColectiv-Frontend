import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { TV_SERIES } from "../apis/binge-watch.mock";
import { AuthService } from "./authentication.service";
import { Token } from "../models/Token";
import { catchError } from "rxjs/operators";
import { AlertService } from "./alert.service";
import { TvSeries, Season } from "../models/tvSeries";
import { Observable, throwError } from "rxjs";

@Injectable()
export class ApiProvider {
  public url = "http://localhost:8080/";
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

  public getFriends(username: string) {
    console.log("---------------------------------get Friends");
    console.log(this.authService.token);
    console.log(this.url + "friends");
    this.httpOptions.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.authService.token
    });
    return this.httpClient
      .post<any>(this.url + "friends", null, this.httpOptions)
      .pipe(catchError(this.handleAddError));
  }

  public getNewFriends(username: string) {
    console.log("---------------------------------get new Friends");
    console.log(this.authService.token);
    console.log(this.url + "search");
    this.httpOptions.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.authService.token
    });
    return this.httpClient
      .post<any>(this.url + "search", null, this.httpOptions)
      .pipe(catchError(this.handleAddError));
  }

  public sendRequest(username: string) {
    console.log("---------------------------------send Friends");
    console.log(this.authService.token);
    console.log(this.url + "friendRequest/" + username);
    this.httpOptions.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.authService.token
    });
    return this.httpClient
      .post<any>(this.url + "friendRequest/" + username, null, this.httpOptions)
      .pipe(catchError(this.handleAddError));
  }

  public addNewFriend(username: string) {
    console.log("---------------------------------request Friend");
    console.log(this.authService.token);
    console.log(this.url + "friendRequestAccepted/" + username);
    this.httpOptions.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.authService.token
    });
    return this.httpClient.post<any>(
      this.url + "friendRequestAccepted/" + username,
      null,
      this.httpOptions
    );
  }

  public removeFriend(username: string) {
    console.log("---------------------------------remove Friend");
    console.log(this.authService.token);
    console.log(this.url + "friendRequestCanceled" + username);
    this.httpOptions.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.authService.token
    });
    return this.httpClient.post<any>(
      this.url + "friendRequestCanceled/" + username,
      null,
      this.httpOptions
    );
  }

  public getFriendsRequests() {
    console.log("---------------------------------get Friends requests");
    console.log(this.authService.token);
    console.log(this.url + "friendsRequest");
    this.httpOptions.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.authService.token
    });
    return this.httpClient.post<any>(
      this.url + "friendsRequest",
      null,
      this.httpOptions
    );
  }

  public getSerialsName() {
    return this.getAllSerials();
  }

  public login(username: string, password: string): Observable<any> {
    console.log(this.url + "authenticate");
    this.httpOptions.headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.httpClient
      .post<Token>(
        this.url + "authenticate",
        { username: username, password: password },
        this.httpOptions
      )
      .pipe(catchError(this.handleLoginError));
  }

  public register(username: string, password: string): Observable<any> {
    console.log(this.url + "register");
    this.httpOptions.headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.httpClient
      .post<any>(
        this.url + "register",
        { username: username, password: password },
        this.httpOptions
      )
      .pipe(catchError(this.handleRegisterError));
  }

  private handleLoginError(errorRespone: HttpErrorResponse) {
    if (errorRespone instanceof ErrorEvent) {
      console.error("Clint side error:", errorRespone.error.message);
    } else {
      console.error("Server side error:", errorRespone.error.message);
      alert("Authentication failed!");
    }
    return throwError("Is an error with the service! Sorry for inconvenience!");
  }
  private handleRegisterError(errorRespone: HttpErrorResponse) {
    if (errorRespone instanceof ErrorEvent) {
      console.error("Clint side error:", errorRespone.error.message);
    } else {
      console.error("Server side error:", errorRespone.error.message);
      alert("Register failed!");
    }
    return throwError("Is an error with the service! Sorry for inconvenience!");
  }
  private handleAddError(errorRespone: HttpErrorResponse) {
    if (errorRespone instanceof ErrorEvent) {
      console.error("Clint side error:", errorRespone.error.message);
    } else {
      console.error("Server side error:", errorRespone.error.message);
    }
    return throwError("Is an error with the service! Sorry for inconvenience!");
  }

  public getAllMovies(): Observable<any> {
    console.log("---------------------------------all Movies");
    console.log(this.authService.token);
    this.httpOptions.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.authService.token
    });

    return this.httpClient.get<any>(this.url + "movies", this.httpOptions);
  }

  public getAllSerials(): Observable<any> {
    console.log("---------------------------------all Series");
    console.log(this.authService.token);
    this.httpOptions.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.authService.token
    });

    return this.httpClient.get<any>(this.url + "series", this.httpOptions);
  }

  //TODO: CHANGE URL AND MAKE GENERIC FOR BOTH CRITERIA (RELEASEYEAR AND RATING)
  public getSortedMovies(): Observable<any> {
    console.log("---------------------------------all Movies sorted ");
    console.log(this.authService.token);
    this.httpOptions.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.authService.token
    });

    return this.httpClient.get<any>(this.url + "series", this.httpOptions);
  }

  public addSeries(series: TvSeries) {
    console.log("---------------------------------add Series");
    console.log(this.authService.token);
    this.httpOptions.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.authService.token
    });
    return this.httpClient
      .post<any>(
        this.url + "series",
        {
          name: series.name,
          image: series.image,
          genres: series.description,
          noOfSeasons: series.noSeasons,
          noOfEpisodes: series.noEpisodes,
          director: "Director",
          releaseYear: "2020"
        },
        this.httpOptions
      )
      .pipe(catchError(this.handleAddError));
  }

  public addNewSeason(season: Season, idSerial: string) {
    console.log("---------------------------------add Season");
    console.log(this.authService.token);
    this.httpOptions.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.authService.token
    });
    console.log(this.url + "seasons");
    return this.httpClient
      .post<any>(
        this.url + "seasons",
        {
          name: season.name,
          generalDescription: season.description,
          number: season.noEpisodes,
          serialId: idSerial
        },
        this.httpOptions
      )
      .pipe(catchError(this.handleAddError));
  }

  public addProfileImage(urlImage: string) {
    console.log(this.authService.token);
    console.log("---------------------------------add Image");
    this.httpOptions.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.authService.token
    });
    return this.httpClient.post<any>(
      this.url + "image",
      { image: urlImage },
      this.httpOptions
    );
  }

  public getDetailsMovie(name: string) {
    console.log("---------------------------------get Details Movie");
    console.log(this.authService.token);
    this.httpOptions.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.authService.token
    });

    return this.httpClient.get<any>(
      this.url + "movies/details/" + name,
      this.httpOptions
    );
  }
  public getHistoryMovies() {
    console.log("---------------------------------get History Movies");
    console.log(this.authService.token);
    this.httpOptions.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.authService.token
    });

    return this.httpClient.get<any>(
      this.url + "movies/history",
      this.httpOptions
    );
  }
  public getLaterMovies() {
    console.log("---------------------------------get Later Movies");
    console.log(this.authService.token);
    this.httpOptions.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.authService.token
    });

    return this.httpClient.get<any>(
      this.url + "movies/watch-later",
      this.httpOptions
    );
  }
  public getHistorySeries() {
    console.log("---------------------------------get History Series");
    console.log(this.authService.token);
    this.httpOptions.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.authService.token
    });

    return this.httpClient.get<any>(
      this.url + "series/history",
      this.httpOptions
    );
  }
  public getLaterSeries() {
    console.log("---------------------------------get Later Series");
    console.log(this.authService.token);
    this.httpOptions.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.authService.token
    });

    return this.httpClient.get<any>(
      this.url + "series/watch-later",
      this.httpOptions
    );
  }

  public getDetailsSerie(name: string) {
    console.log("---------------------------------get Details Serie");
    console.log(this.authService.token);
    this.httpOptions.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.authService.token
    });

    return this.httpClient.get<any>(
      this.url + "series/details/" + name,
      this.httpOptions
    );
  }

  public addInHistory(id: string, type: string) {
    console.log("---------------------------------Add in history");
    console.log(this.authService.token);
    this.httpOptions.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.authService.token
    });

    if (type === "movies") {
      return this.httpClient.post<any>(
        this.url + `movies/${id}/history`,
        null,
        this.httpOptions
      );
    } else
      return this.httpClient.post<any>(
        this.url + `series/${id}/history`,
        { "episodeId": "1" },
        this.httpOptions
      );
  }

  public addInWatchLater(id: string, type: string) {
    console.log("---------------------------------Add in watch later");
    console.log(this.authService.token);
    this.httpOptions.headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.authService.token
    });

    if (type === "movies") {
      return this.httpClient.post<any>(
        this.url + `movies/${id}/watch-later`,
        null,
        this.httpOptions
      );
    } else {
      return this.httpClient.post<any>(
        this.url + `series/${id}/watch-later`,
        null,
        this.httpOptions
      );

  }
}
