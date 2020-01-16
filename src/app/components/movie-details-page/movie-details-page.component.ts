import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.scss']
})
export class MovieDetailsPageComponent implements OnInit {

  movie = ""
  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let movie = this.route.snapshot.paramMap.get('movie');
    console.log(movie);
  }

}
