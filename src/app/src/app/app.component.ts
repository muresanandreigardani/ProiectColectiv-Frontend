import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog) { }

  public loginPush() {
    this.dialog.open(LoginComponent);
  }

}
