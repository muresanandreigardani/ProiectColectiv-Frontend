import { ProfileComponent } from "./profile/profile.component";
import { TvShowsComponent } from "./tv-shows/tv-shows.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { LoginComponent } from "./components/login/login.component";
import { AdminPageComponent } from "./admin-page/admin-page.component";
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { SearchPageComponent } from './search-page/search-page.component';
const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "calendar",
    component: CalendarComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "registration",
    component: UserRegistrationComponent
  },
  {
    path: "tvshows",
    component: TvShowsComponent,
    data: { type: "tvshows" }
  },
  {
    path: "movies",
    component: TvShowsComponent,
    data: { type: "movies" }
  },
  {
    path: "admin",
    component: AdminPageComponent
  },
  {
    path: "user",
    component: ProfileComponent,
    data: { token: "token" }
  },
  {
    path: "searchpage/:key",
    component: SearchPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
