import { Component } from '@angular/core';
import { AuthService } from './services/authentication.service';
import { LoginResponse } from './models/project.enum';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { ApiProvider } from './services/api-provide';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  searchNameText: String = "";

  public constructor(private authService: AuthService, private router: Router, private apiProvider: ApiProvider) {
    // this.router.navigate(['']);
  }

  public logout() {
    this.authService.loginStatus = LoginResponse.Fail;
    this.authService.token = "";
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

  onSubmit() {
    console.log(this.searchNameText);
    this.router.navigate(['/searchpage', this.searchNameText])
  }
}
