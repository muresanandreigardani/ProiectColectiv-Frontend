import { Component } from '@angular/core';
import { AuthService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { LoginResponse } from '../models/project.enum';
import { Genres } from '../apis/binge-watch.mock';
import { TvSeries, Season, Episode } from '../models/tvSeries';
import { Movie } from '../models/movie';
import { User } from '../models/users';
import { ApiProvider } from '../services/api-provide';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent {

  public genres = [];
  public serial: TvSeries;
  public movie: Movie;
  public user: User;
  public season: Season;
  public episodeSerial: string;
  public seasonSerial: string;
  public episode: Episode;
  public serialNames: string[];

  public constructor(
    private authService: AuthService,
    private router: Router,
    private apiProvider: ApiProvider
  ) {

    if (this.authService.loginStatus === LoginResponse.Fail) {
      this.router.navigate(['']);
      alert('You are not authenticated!');
    }
    else {
      this.genres = Genres;
      this.serial = new TvSeries();
      this.movie = new Movie();
      this.user = new User();
      this.season = new Season();
      this.episode = new Episode();
      this.serialNames = this.apiProvider.getSerialsName();
    }
  }

  public addNewSerial() {
    console.log(this.serial);
    this.serial = new TvSeries();
  }

  public addNewMovie() {
    console.log(this.movie);
    this.movie = new Movie()
  }

  public removeUser() {
    console.log(this.user);
    this.user = new User();
  }

  public addNewSeason() {
    console.log(this.season);
    console.log(this.seasonSerial);
    this.season = new Season();
    this.seasonSerial = '';
  }

  public addNewEpisode() {
    console.log(this.episode);
    console.log(this.episodeSerial);
    this.episode = new Episode();
    this.episodeSerial = '';
  }

}
