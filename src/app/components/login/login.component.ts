import { Component } from "@angular/core";
import {
  FormControl,
  Validators,
  FormGroupDirective,
  NgForm
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material";

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

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);
  matcher = new MyErrorStateMatcher();

  passwordFormControl = new FormControl("", [Validators.required]);
  public submit() {
    alert(this.username + " " + this.password);
  }

  public usernameChange($event) {
    this.username = $event;
  }

  public passwordChange($event) {
    this.password = $event;
  }
}
