import { TvShowsComponent } from "./tv-shows/tv-shows.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { LoginComponent } from "./components/login/login.component";

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
    path: "tvshows",
    component: TvShowsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
