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
    slidesToShow: 8,
    slidesToScroll: 2,
    infinite: false
  };
}
