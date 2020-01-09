import { Component } from "@angular/core";
import {
  FormControl,
  Validators,
  FormGroupDirective,
  NgForm
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material";
import { LoginResponse } from "src/app/models/project.enum";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/authentication.service";
import { ApiProvider } from 'src/app/services/api-provide';
import { throwError } from 'rxjs';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  public username: "";
  public password: "";

  public constructor(
    private apiProvider: ApiProvider,
    private router: Router,
    private authService: AuthService
  ) { }

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);
  matcher = new MyErrorStateMatcher();

  passwordFormControl = new FormControl("", [Validators.required]);
  public submit() {
    let response;
    this.apiProvider.login(this.username, this.password)
      .subscribe(data => {
        console.log(data);
        const res = data['token'];
        if (res) {
          response = LoginResponse.Admin;
        }
        console.log(response);
        this.authService.token = res;
        if (response === LoginResponse.Admin) {
          this.authService.loginStatus = LoginResponse.Admin;
          this.router.navigate(["/admin"]);
        } else {
          if (response === LoginResponse.User) {
            this.authService.loginStatus = LoginResponse.User;
            this.router.navigate(["/user"]);
          } else {
            alert("Authentication failed!");
            this.username = "";
            this.password = "";
          }
        }
      });




  }
}
