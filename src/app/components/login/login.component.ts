import { Component } from '@angular/core';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { UserService } from 'src/app/services/user.service';
import { LoginResponse } from 'src/app/models/project.enum';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public username: '';
  public password: '';

  public constructor(
    private userService: UserService,
    private router: Router,
    private authService: AuthService
  ) { }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new MyErrorStateMatcher();

  public submit() {
    let response;
    this.userService.login(this.username, this.password).subscribe(data => {
      response = JSON.parse(data);
    });
    if (response === LoginResponse.Admin) {
      this.authService.loginStatus = LoginResponse.Admin;
      this.router.navigate(['/admin']);
    }
    else {
      if (response === LoginResponse.User) {
        this.authService.loginStatus = LoginResponse.User;
        this.router.navigate(['/user'])
      }
      else {
        alert('Authentication failed!');
        this.username = '';
        this.password = '';
      }
    }
  }

}
