import { Component, Input, HostListener } from "@angular/core";
import { Movie } from "src/app/models/movie";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"]
})
export class CarouselComponent {
  public innerWidth: number;
  public nrOfMovies: number = 8;
  @Input()
  public title: string;
  @Input()
  public movieList: any[];

  public slideConfig = {
    slidesToShow: this.nrOfMovies,
    slidesToScroll: this.nrOfMovies,
    responsive: [
      { breakpoint: 1340, settings: { slidesToShow: 7, slidesToScroll: 7 } },
      { breakpoint: 1260, settings: { slidesToShow: 6, slidesToScroll: 6 } },
      { breakpoint: 1080, settings: { slidesToShow: 5, slidesToScroll: 5 } },
      { breakpoint: 900, settings: { slidesToShow: 4, slidesToScroll: 4 } },
      { breakpoint: 720, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 540, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 360, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };
}
