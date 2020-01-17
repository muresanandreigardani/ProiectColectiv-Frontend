import { ApiProvider } from "src/app/services/api-provide";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-movie-details-page",
  templateUrl: "./movie-details-page.component.html",
  styleUrls: ["./movie-details-page.component.scss"]
})
export class MovieDetailsPageComponent implements OnInit {
  item: any;
  itemTitle: string;
  type: string;
  rating: string;
  isAddedInHistory: boolean = false;
  isAddedInWatchLater: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private apiProvider: ApiProvider,
    private router: Router
  ) {}

  updateRating(rating: number) {
    this.apiProvider.giveRating(this.item.id, rating).subscribe(data => { console.log(data); this.ngOnInit() });
  }

  addInHistory() {
    this.apiProvider
      .addInHistory(this.item.id, this.type)
      .subscribe(data => console.log(data));
    this.isAddedInHistory = !this.isAddedInHistory;
  }

  addInWatchLater() {
    this.apiProvider
      .addInWatchLater(this.item.id, this.type)
      .subscribe(data => console.log(data));
    this.isAddedInWatchLater = !this.isAddedInWatchLater;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.itemTitle = params["item"];
      this.type = params["typeItem"];
      console.log(this.itemTitle);
      console.log(this.type);
    });

    switch (this.type) {
      case "movies":
        this.apiProvider.getDetailsMovie(this.itemTitle).subscribe(movie => {
          console.log(movie);
          this.item = {
            id: movie["id"],
            name: movie["name"],
            duration: movie["duration"],
            releaseYear: movie["releaseYear"],
            director: movie["director"],
            genres: movie["genres"],
            description: movie["genres"],
            image: movie["image"],
            rating: movie["rating"]
          };
          //this.rating = movie["rating"];
        });
        break;

      case "tvshows":
        this.apiProvider.getDetailsSerie(this.itemTitle).subscribe(serie => {
          this.item = {
            id: serie["id"],
            name: serie["name"],
            director: serie["director"],
            genres: serie["genres"],
            releaseYear: serie["releaseYear"],
            noEpisodes: serie["noOfEpisodes"],
            noSeasons: serie["noOfSeasons"],
            image: serie["image"],
            rating: serie["rating"]
          };
        });
        break;

      default:
        console.log("Type incorrect");
    }
  }
}
