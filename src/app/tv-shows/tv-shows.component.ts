import { Component, OnInit } from "@angular/core";
import { TvSeries } from "../models/tvSeries";
import * as mockData from "../apis/binge-watch.mock";
@Component({
  selector: "app-tv-shows",
  templateUrl: "./tv-shows.component.html",
  styleUrls: ["./tv-shows.component.scss"]
})
export class TvShowsComponent implements OnInit {
  public series: TvSeries[] = mockData.TV_SERIES;
  public images: string[] = [];
  public breakpoint: number = 4;
  constructor() {
    this.imagesUrl();
  }

  public imagesUrl(): string[] {
    mockData.MOVIE_LIST.forEach(x => {
      if (this.images.filter(y => y === x.image).length === 0)
        this.images.push(x.image);
    });

    return this.images;
  }

  ngOnInit() {
    let width = window.innerWidth;
    this.setBreakpoint(width);
  }

  onResize(event) {
    let width = event.target.innerWidth;
    this.setBreakpoint(width);
  }

  setBreakpoint(width) {
    if (width > 1500) {
      this.breakpoint = 5;
    }
    if (width <= 1300) {
      this.breakpoint = 4;
    }
    if (width <= 880) {
      this.breakpoint = 3;
    }
    if (width <= 600) {
      this.breakpoint = 2;
    }
    if (width <= 400) {
      this.breakpoint = 1;
    }
  }
}
