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
  isAddedInHistory: boolean = false;
  isAddedInWatchLater: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private apiProvider: ApiProvider,
    private router: Router
  ) {}

  addInHistory() {
    this.apiProvider.addInHistory(this.item.id, this.type);
    this.isAddedInHistory = !this.isAddedInHistory;
  }

  addInWatchLater() {
    this.apiProvider.addInWatchLater(this.item.id, this.type);
    this.isAddedInWatchLater = !this.isAddedInWatchLater;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.itemTitle = params["item"];
      this.type = params["typeItem"];
    });

    switch (this.type) {
      case "movie":
        this.apiProvider.getDetailsMovie(this.itemTitle).subscribe(movie => {
          this.item = {
            id: movie["id"],
            name: movie["name"],
            duration: movie["duration"],
            releaseYear: movie["releaseYear"],
            director: movie["director"],
            genres: movie["genres"],
            description: movie["description"],
            image: movie["image"]
          };
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
            image: serie["image"]
          };
        });
        break;

      default:
        console.log("Type incorrect");
    }
  }
}
