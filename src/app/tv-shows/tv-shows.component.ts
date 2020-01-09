import { TV_SERIES } from "./../apis/binge-watch.mock";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { TvSeries } from "../models/tvSeries";
import { Movie } from "../models/movie";
import * as mockData from "../apis/binge-watch.mock";
import { MOVIE_LIST } from "../apis/binge-watch.mock";
import { ApiProvider } from '../services/api-provide';

@Component({
  selector: "app-tv-shows",
  templateUrl: "./tv-shows.component.html",
  styleUrls: ["./tv-shows.component.scss"]
})
export class TvShowsComponent implements OnInit {
  public data: any[];
  public images: string[] = [];
  public breakpoint: number = 4;
  public ratio: string;
  public type: string;
  constructor(
    private route: ActivatedRoute,
    private apiProvider: ApiProvider
  ) {
    this.imagesUrl();
    this.apiProvider.getAllMovies();
  }

  public imagesUrl(): string[] {
    mockData.MOVIE_LIST.forEach(x => {
      if (this.images.filter(y => y === x.image).length === 0)
        this.images.push(x.image);
    });

    return this.images;
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.type = data.type;
    });

    switch (this.type) {
      case "movies":
        this.data = mockData.MOVIE_LIST;
        break;
      case "tvshows":
        this.data = mockData.TV_SERIES;
        break;
      default:
        alert("Ceva fain");
    }

    /* fetch data from server
    switch (this.type) {
      case "movie":
        fetch("url")
          .then(response => response.json())
          .then(json => {
            json.forEach(element => {
              const movie = {
                id: element.id,
                name: element.name,
                duration: element.duration,
                releaseDate: element.releaseDate,
                author: element.author,
                description: element.description,
                image: element.image
              };
              this.data.push(movie);
            });
          })
          .catch(err => {
            alert(err);
          });
        break;
      case "tvshows":
        fetch("url")
          .then(response => response.json())
          .then(json => {
            json.forEach(element => {
              const serial = {
                image: element.image,
                id: element.id,
                name: element.name,
                releaseDate: element.releaseDate,
                noEpisodes: element.noEpisodes,
                noSeasons: element.noSeasons
              };
              this.data.push(serial);
            });
          })
          .catch(err => {
            alert(err);
          });
        break;
      default:
        alert("Try to refresh");
    }
    */
  }
}
