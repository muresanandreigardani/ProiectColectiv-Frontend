import { Component, OnInit, Input } from "@angular/core";
import { User } from "../models/users";
import { Movie } from "../models/movie";
import { TvSeries } from "../models/tvSeries";
import * as mockData from "../apis/binge-watch.mock";
@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  public user: User;
  public friends: any[] = [];
  private userMovies: Movie[];
  private userTvSeries: TvSeries[];
  public movies: Movie[];
  public tvSeries: TvSeries[];
  public images: string[] = [];

  public showMovies: boolean = false;
  public showSeries: boolean = false;
  public showFriends: boolean = false;
  @Input()
  public userToken: string;

  constructor() {
    this.imagesUrl();
  }

  changeData(id) {
    if (id === this.user.id) {
      this.movies = this.userMovies;
      this.tvSeries = this.userTvSeries;
    } else {
      this.movies = this.friends.filter(x => x.id === id)[0].movies;
      this.tvSeries = this.friends.filter(x => x.id === id)[0].tvSeries;
    }
  }

  ngOnInit() {
    this.user = new User();
    this.user.id = "123";
    this.user.email = "asd@gmail.com";
    this.user.userRole = "User";
    this.user.name = "Florin Salam";
    this.userMovies = mockData.MOVIE_LIST;
    this.userTvSeries = mockData.TV_SERIES;
    this.movies = this.userMovies;
    this.tvSeries = this.userTvSeries;

    for (let i = 0; i < 30; i++) {
      this.friends.push({
        id: "32",
        name: "Gigi",
        movies: [
          {
            name: "Film1",
            duration: 120,
            releaseDate: new Date(),
            author: "Autor1",
            description: "Description1",
            image:
              "https://i1.wp.com/alankrode.com/wp-content/uploads/2018/06/New-York-Confidential-DVD-cover-360w-500h-180x250.jpg?ssl=1"
          },
          {
            name: "Film2",
            duration: 120,
            releaseDate: new Date(),
            author: "Autor2",
            description: "Description2",
            image:
              "http://www.magazinemix.co.uk/wp-content/uploads/2015/10/filmmonthlyjul1990-180x250.jpg"
          },
          {
            name: "Film3",
            duration: 120,
            releaseDate: new Date(),
            author: "Autor3",
            description: "Description3",
            image:
              "https://i1.wp.com/alankrode.com/wp-content/uploads/2018/06/New-York-Confidential-DVD-cover-360w-500h-180x250.jpg?ssl=1"
          },
          {
            name: "Film3",
            duration: 120,
            releaseDate: new Date(),
            author: "Autor3",
            description: "Description3",
            image:
              "http://www.topprimenews.xyz/wp-content/uploads/2019/08/Mantesh-Kumar-180x250.jpg"
          }
        ],
        tvSeries: [
          {
            id: 1,
            name: "Serial1",
            releaseDate: new Date(),
            noEpisodes: 4,
            noSeasons: 4,
            description: "Description1",
            image:
              "https://www.omofon.com/wp-content/uploads/2018/07/top-seriale-Netflix-e1531303094136.jpg"
          },
          {
            id: 1,
            name: "Serial1",
            releaseDate: new Date(),
            noEpisodes: 4,
            description: "Description1",
            noSeasons: 4,
            image:
              "https://www.omofon.com/wp-content/uploads/2018/07/top-seriale-Netflix-e1531303094136.jpg"
          },
          {
            id: 1,
            name: "Serial1",
            releaseDate: new Date(),
            noEpisodes: 4,
            noSeasons: 4,
            description: "Description1",
            image:
              "https://www.omofon.com/wp-content/uploads/2018/07/top-seriale-Netflix-e1531303094136.jpg"
          },
          {
            id: 1,
            name: "Serial1",
            releaseDate: new Date(),
            noEpisodes: 4,
            noSeasons: 4,
            description: "Description1",
            image:
              "https://www.omofon.com/wp-content/uploads/2018/07/top-seriale-Netflix-e1531303094136.jpg"
          }
        ]
      });
    }
    //fetch user details
    // fetch("url")
    // .then(response => response.json())
    // .then(user => {
    //   this.user = user;
    // })
    // .catch(err => {
    //   alert(err.message)
    // })

    //fetch friends
    // fetch("url")
    // .then(response => response.json())
    // .then(friends => {
    //   friends.forEach(friend =>{
    //     const newFriend = {
    //       id:friend.id,
    //       name:friend.name,
    //       movies:friend.movies,
    //       tvSeries:friend.series
    //     }
    //     this.friends.push(newFriend);
    //   })
    // })
    // .catch(err => {
    //   alert(err.message)
    // })

    //fetch user movies
    // fetch("url")
    // .then(response => response.json())
    // .then(movies => {
    //   movies.forEach(movie =>{
    //     const newMovie = new Movie();
    //     newMovie.image = movie.image;
    //     newMovie.name = movie.name;
    //     newMovie.releaseDate = movie.releaseDate;
    //     newMovie.duration = movie.duration;
    //     newMovie.description = movie.description;
    //     newMovie.author = movie.author;
    //     this.userMovies.push(newMovie);
    //   })
    // })
    // .catch(err => {
    //   alert(err.message)
    // })

    //fetch user series
    // fetch("url")
    // .then(response => response.json())
    // .then(movies => {
    //   movies.forEach(movie =>{
    //     const newSerie = new TvSeries();
    //     newSerie.image = movie.image;
    //     newSerie.name = movie.name;
    //     newSerie.releaseDate = movie.releaseDate;
    //     newSerie.noSeasons = movie.noSeasons;
    //     newSerie.description = movie.description;
    //     newSerie.noEpisodes = movie.noEpisodes;
    //     this.userTvSeries.push(newSerie);
    //   })
    // })
    // .catch(err => {
    //   alert(err.message)
    // })
  }

  public imagesUrl(): string[] {
    mockData.MOVIE_LIST.forEach(x => {
      if (this.images.filter(y => y === x.image).length === 0)
        this.images.push(x.image);
    });

    return this.images;
  }
}
