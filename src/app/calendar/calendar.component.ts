import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as mockData from "../apis/binge-watch.mock";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  public data: any[];
  public images: string[] = [];
  public breakpoint: number = 4;
  public ratio: string;
  public type: string;
  constructor(private route: ActivatedRoute) {
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
    this.route.data.subscribe(data => {
      this.type = data.type;
    });
    this.data = mockData.MOVIE_LIST;
  }


}
