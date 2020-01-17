import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiProvider } from '../services/api-provide';
import { AuthService } from "../services/authentication.service";
import { AlertService } from '../services/alert.service';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  filteredData = []

  private apiProvider: ApiProvider


  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService, private alertService: AlertService) {
    if (this.authService.token === "") {
      this.alertService.openSnackBar("You are not authenticated!", "Cancel");
      this.router.navigate([""]);
    }
  }

  ngOnInit() {
    let key = this.route.snapshot.paramMap.get('key');
    console.log("search " + key)
    let serverData = [];
    this.apiProvider.getAllMovies().subscribe(data => {
      console.log(data);
      data.forEach(movie => {
        serverData.push({
          name: movie["name"],
          duration: movie["duration"],
          releaseYear: movie["releaseYear"],
          director: movie["director"],
          genres: movie["genres"],
          description: movie["description"],
          image: movie["image"]
        });
      });
    });
    this.apiProvider.getAllSerials().subscribe(data => {
      console.log(data);
      data.forEach(series => {
        serverData.push({
          name: series["name"],
          director: series["director"],
          genres: series["genres"],
          releaseYear: series["releaseYear"],
          noEpisodes: series["noOfEpisodes"],
          noSeasons: series["noOfSeasons"],
          image: series["image"]
        });
      });
    });
    this.filteredData = serverData.filter(entity => { entity.name.includes(key) })
    console.log(key);
  }
}
