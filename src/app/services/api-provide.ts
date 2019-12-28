import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TV_SERIES } from '../apis/binge-watch.mock';

@Injectable()
export class ApiProvider {
    public url = "";
    public httpOptions;

    constructor(private httpClient: HttpClient) {
        this.httpOptions = {
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                Authorization: "my-auth-token"
            })
        };
    }

    public getSerialsName() {
        return TV_SERIES.map(x => x.name);
    }
}