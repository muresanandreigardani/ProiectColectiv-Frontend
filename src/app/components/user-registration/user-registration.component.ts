import { Component } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ApiProvider } from 'src/app/services/api-provide';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication.service';
import { LoginResponse } from 'src/app/models/project.enum';
import { AlertService } from 'src/app/services/alert.service';

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
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent {

  public username: "";
  public password: "";
  public confirmPassword: "da";

  public constructor(
    private apiProvider: ApiProvider,
    private alertService: AlertService,
    private router: Router
  ) { }

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);
  matcher = new MyErrorStateMatcher();

  passwordFormControl = new FormControl("", [Validators.required]);
  public submit() {
    if (!this.emailFormControl.hasError('required')) {
      this.apiProvider.register(this.username, this.password).subscribe(user => {
        console.log(user);
        if (user['username'] === this.username) {
          this.router.navigate(['/login']);
          this.alertService.openSnackBar("Registration succesfull!", "Cancel");
        }
        else {
          this.alertService.openSnackBar("Registration failed!", "Cancel");
        }
      });
    }
    else {
      this.alertService.openSnackBar("Registration failed email required!", "Cancel");
    }

  }


}
