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
  public episodeSerial: any;
  public seasonSerial: any;
  public episode: Episode;
  public serialNames: any[] = [];

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

      this.apiProvider.getAllSerials().subscribe(data => {
        console.log(data);
        data.forEach(series => {
          this.serialNames.push({
            id: series['id'],
            nume: series['name']
          });
        });
      });
    }
  }

  public addNewSerial() {

    this.apiProvider.addSeries(this.serial).subscribe(data => {
      console.log(data);
    });

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
    this.apiProvider.addNewSeason(this.season, this.seasonSerial.id).subscribe(data => {
      console.log(data);
    });
    this.season = new Season();
    this.seasonSerial = undefined;
  }

  public addNewEpisode() {
    console.log(this.episode);
    console.log(this.episodeSerial);
    this.episode = new Episode();
    this.episodeSerial = '';
  }

}
