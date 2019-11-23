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
  public ratio: string;
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
    this.setRation(width);
  }

  onResize(event) {
    let width = event.target.innerWidth;
    this.setBreakpoint(width);
    this.setRation(width);
  }

  setRation(width) {
    // alert(width);
    if (width > 2200) {
      this.ratio = "1:1.2";
    }
    if (width <= 2200) {
      this.ratio = "1:1.4";
    }
    if (width <= 1500) {
      this.ratio = "1:1.5";
    }
    if (width <= 1360) {
      this.ratio = "1:1.7";
    }
    if (width <= 1290) {
      this.ratio = "1:1.3";
    }
    if (width <= 1150) {
      this.ratio = "1:1.5";
    }
    if (width <= 960) {
      this.ratio = "1.1:1.3";
    }
    if (width <= 900) {
      this.ratio = "1.1:1.5";
    }
    if (width <= 800) {
      this.ratio = "1.1:1.6";
    }
    if (width <= 650) {
      this.ratio = "1.2:1.9";
    }
    if (width <= 600) {
      this.ratio = "1.1:1.3";
    }
    if (width <= 550) {
      this.ratio = "1.2:1.7";
    }
    if (width <= 450) {
      this.ratio = "1.1:2";
    }
    if (width <= 400) {
      this.ratio = "1.3:1.2";
    }
    if (width <= 350) {
      this.ratio = "1.3:1.5";
    }
  }
  setBreakpoint(width) {
    if (width > 2000) {
      this.breakpoint = 6;
    }
    if (width <= 1500) {
      this.breakpoint = 5;
    }
    if (width <= 1300) {
      this.breakpoint = 4;
    }
    if (width <= 1280) {
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
