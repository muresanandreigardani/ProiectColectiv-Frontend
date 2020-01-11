import { Injectable } from "@angular/core";
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { LoginResponse } from '../models/project.enum';


@Injectable()
export class AuthService {
    loginStatus: LoginResponse = LoginResponse.Fail;
    token: string = "";
}