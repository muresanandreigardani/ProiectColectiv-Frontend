import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-movie-card",
  templateUrl: "./movie-card.component.html",
  styleUrls: ["./movie-card.component.scss"]
})
export class MovieCardComponent {
  @Input()
  public item: any;
}
