import { Component } from '@angular/core';
import { AuthService } from './services/authentication.service';
import { LoginResponse } from './models/project.enum';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  public constructor(private authService: AuthService, private router: Router) {
    // this.router.navigate(['']);
  }

  public logout() {
    this.authService.loginStatus = LoginResponse.Fail;
    this.router.navigate(['']);
  }

  public setTab(tabName: string) {
    this.router.navigate([tabName]);
  }

  public navigateToProfile() {
    if (this.authService.loginStatus === LoginResponse.Admin) {
      this.router.navigate(['/admin']);
    }
    else {
      if (this.authService.loginStatus === LoginResponse.User) {
        this.router.navigate(['/user']);
      }
    }
  }
}
