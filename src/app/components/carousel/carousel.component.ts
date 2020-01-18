import { Component, Input, HostListener } from "@angular/core";
import { Movie } from "src/app/models/movie";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"]
})
export class CarouselComponent {
  public innerWidth: number;
  public nrOfMovies: number;
  public toShow: number;
  @Input()
  public title: string;
  @Input()
  public movieList: any[];

  ngOnInit() {
    this.nrOfMovies = this.movieList.length;
    if (this.nrOfMovies > 8) this.slideConfig.slidesToShow = 8;
    else this.slideConfig.slidesToShow = 1;
  }

  public slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 2,
    infinite: false
  };
}
