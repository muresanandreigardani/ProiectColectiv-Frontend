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
  public filteredData: any[];
  public images: string[] = [];
  public type: string;
  public title: string = "";
  public sortBy: string = "releaseYear";
  public filterGenre: string = "";

  constructor(
    private route: ActivatedRoute,
    private apiProvider: ApiProvider,
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService
  ) {
    if (this.authService.token === "") {
      this.alertService.openSnackBar("You are not authenticated!", "Cancel");
      this.router.navigate([""]);
    } else {
      this.imagesUrl();
    }
  }

  getGenres() {
    let genres = new Set();
    // this.data.forEach(item => {
    //   item.genres.forEach(genre => {
    //     genres.add(genre);
    //   });
    // });
    genres.add('Sci-fi');
    genres.add('action');
    genres.add('adventure');
    genres.add('animation');
    genres.add('comedy');
    genres.add('mystery');
    genres.add('drama');
    genres.add('romance');

    return genres;
  }

  public imagesUrl(): string[] {
    mockData.MOVIE_LIST.forEach(x => {
      if (this.images.filter(y => y === x.image).length === 0)
        this.images.push(x.image);
    });

    return this.images;
  }

  performSortRequest($event) {
    this.data = this.data.sort((x, y) => {
      console.log($event);
      if ($event.value === 'rating') {
        if (this.type === "movies") {
          if (x.rating < y.rating) {
            return 1;
          }
          else {
            if (x.rating > y.rating)
              return -1;
          }
          return 0;
        }
        else {
          if (x.id < y.id) {
            return 1;
          }
          else {
            if (x.id > y.id)
              return -1;
          }
          return 0;
        }
      }
      else {
        if (+x.releaseYear < +y.releaseYear) {
          return 1;
        }
        else {
          if (+x.releaseYear > +y.releaseYear)
            return -1;
        }
        return 0;
      }
    })
  }

  filterData() {
    if (this.title !== "" && this.filterGenre === "") {
      this.filteredData = this.data.filter(item => {
        return item["name"].toLowerCase().includes(this.title.toLowerCase());
      });
    } else if (this.title === "" && this.filterGenre !== "") {
      this.filteredData = this.data.filter(item => {
        let foundGenre: boolean = false;
        item["genres"].forEach(genre => {
          if (genre.toLowerCase() === this.filterGenre.toLowerCase()) {
            foundGenre = true;
          }
        });
        return foundGenre;
      });
    } else if (this.title !== "" && this.filterGenre !== "") {
      this.filteredData = this.data.filter(item => {
        return item["name"].toLowerCase().includes(this.title.toLowerCase());
      });
      this.filteredData = this.filteredData.filter(item => {
        let foundGenre: boolean = false;
        item["genres"].forEach(genre => {
          if (genre.toLowerCase() === this.filterGenre.toLowerCase()) {
            foundGenre = true;
          }
        });
        return foundGenre;
      });
    }
  }

  clearFilters() {
    this.filteredData = this.data;
    this.title = "";
    this.filterGenre = "";
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.type = data.type;
    });

    let serverData = [];
    switch (this.type) {
      case "movies":
        serverData = [];
        // this.data = mockData.MOVIE_LIST;
        this.apiProvider.getAllMovies().subscribe(data => {
          console.log(data);
          data.forEach(movie => {
            serverData.push({
              name: movie["name"],
              duration: movie["duration"],
              releaseYear: movie["releaseYear"],
              director: movie["director"],
              genres: movie["genres"],
              description: movie["description"],
              image: movie["image"],
              rating: movie["rating"]
            });
          });
        });
        this.data = serverData;
        this.filteredData = this.data;
        break;
      case "tvshows":
        serverData = [];
        // this.data = mockData.TV_SERIES;
        this.apiProvider.getAllSerials().subscribe(data => {
          console.log(data);
          data.forEach(series => {
            serverData.push({
              name: series["name"],
              description: series["description"],
              director: series["director"],
              genres: series["genres"],
              releaseYear: series["releaseYear"],
              noEpisodes: series["noOfEpisodes"],
              noSeasons: series["noOfSeasons"],
              image: series["image"],
              rating: series["rating"]
            });
          });
        });
        this.data = serverData;
        this.filteredData = this.data;
        break;
      default:
        alert("Something went wrong");
    }
  }
}
