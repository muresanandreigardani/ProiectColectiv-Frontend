import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import * as mockData from "../apis/binge-watch.mock";
import { ApiProvider } from "../services/api-provide";
import { AuthService } from "../services/authentication.service";
import { MatSnackBar } from "@angular/material";
import { AlertService } from "../services/alert.service";
import { Movie } from "../models/movie";

@Component({
  selector: "app-tv-shows",
  templateUrl: "./tv-shows.component.html",
  styleUrls: ["./tv-shows.component.scss"]
})
export class TvShowsComponent implements OnInit {
  public data: any[];
  public images: string[] = [];
  public type: string;
  public sortBy: string = "releaseYear";

  constructor(
    private route: ActivatedRoute,
    private apiProvider: ApiProvider,
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService
  ) {
    // if (this.authService.token === "") {
    //   // alert('You are not authenticate!');
    //   this.alertService.openSnackBar("You are not authenticated!", "Cancel");
    //   this.router.navigate([""]);
    // } else {
    this.imagesUrl();
    // }
  }

  public imagesUrl(): string[] {
    mockData.MOVIE_LIST.forEach(x => {
      if (this.images.filter(y => y === x.image).length === 0)
        this.images.push(x.image);
    });

    return this.images;
  }
  performSortRequest(event) {
    if (event.value === "releaseYear")
      if (this.type === "movies") {
        this.data = mockData.MOVIE_LIST.sort((movie1, movie2) => {
          return movie1.releaseYear < movie2.releaseYear ? 1 : 0;
        });
      } else if (this.type === "tvshows") {
        this.data = mockData.TV_SERIES.sort((serial1, serial2) => {
          return serial1.releaseYear < serial2.releaseYear ? 1 : 0;
        });
      }
    // let serverData = [];
    // switch (this.type) {
    //   case "movies":
    // serverData = [];
    // this.data = mockData.MOVIE_LIST;
    // this.apiProvider.getSortedMovies().subscribe(data => {
    //   console.log(data);
    //   data.forEach(movie => {
    //     serverData.push({
    //       name: movie["name"],
    //       duration: movie["duration"],
    //       releaseYear: movie["releaseYear"],
    //       director: movie["director"],
    //       genres: movie["genres"],
    //       description: movie["description"],
    //       image: movie["image"]
    //     });
    //   });
    // });
    // this.data = serverData;
    // break;
    // case "tvshows":
    // serverData = [];
    // this.data = mockData.TV_SERIES;
    // this.apiProvider.getSortedSerials().subscribe(data => {
    //   console.log(data);
    //   data.forEach(series => {
    //     serverData.push({
    //       name: series["name"],
    //       director: series["director"],
    //       genres: series["genres"],
    //       releaseYear: series["releaseYear"],
    //       noEpisodes: series["noOfEpisodes"],
    //       noSeasons: series["noOfSeasons"],
    //       image: series["image"]
    //     });
    //   });
    // });
    // this.data = serverData;
    //     break;
    //   default:
    //     alert("Something went wrong");
    // }
  }
  ngOnInit() {
    this.route.data.subscribe(data => {
      this.type = data.type;
    });

    // let serverData = [];
    switch (this.type) {
      case "movies":
        // serverData = [];
        this.data = mockData.MOVIE_LIST;
        // this.apiProvider.getAllMovies().subscribe(data => {
        //   console.log(data);
        //   data.forEach(movie => {
        //     serverData.push({
        //       name: movie["name"],
        //       duration: movie["duration"],
        //       releaseYear: movie["releaseYear"],
        //       director: movie["director"],
        //       genres: movie["genres"],
        //       description: movie["description"],
        //       image: movie["image"]
        //     });
        //   });
        // });
        // this.data = serverData;
        break;
      case "tvshows":
        // serverData = [];
        this.data = mockData.TV_SERIES;
        // this.apiProvider.getAllSerials().subscribe(data => {
        //   console.log(data);
        //   data.forEach(series => {
        //     serverData.push({
        //       name: series["name"],
        //       director: series["director"],
        //       genres: series["genres"],
        //       releaseYear: series["releaseYear"],
        //       noEpisodes: series["noOfEpisodes"],
        //       noSeasons: series["noOfSeasons"],
        //       image: series["image"]
        //     });
        //   });
        // });
        // this.data = serverData;
        break;
      default:
        alert("Something went wrong");
    }
  }
}
