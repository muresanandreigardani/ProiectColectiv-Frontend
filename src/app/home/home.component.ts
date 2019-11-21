import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as mockData from '../apis/binge-watch.mock';
import { Movie } from '../models/movie';
import { TvSeries } from '../models/tvSeries';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public movies: Movie[] = mockData.MOVIE_LIST;
  public series: TvSeries[] = mockData.TV_SERIES;
  public images: string[] = [];

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
}
