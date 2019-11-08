import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
