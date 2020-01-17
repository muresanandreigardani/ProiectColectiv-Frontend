import { Component, OnInit, Input } from "@angular/core";
import { User } from "../models/users";
import { Movie } from "../models/movie";
import { TvSeries } from "../models/tvSeries";
import * as mockData from "../apis/binge-watch.mock";
import { ApiProvider } from '../services/api-provide';
import { AuthService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { LoginResponse } from '../models/project.enum';
@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  public user: User;
  public friends = [];
  public makeNewFriends = [];
  public requestFriends = [];
  private userMovies: Movie[];
  private userTvSeries: TvSeries[];
  public movies: Movie[];
  public tvSeries: TvSeries[];
  public images: string[] = [];

  public history: any[];

  public showMovies: boolean = false;
  public showSeries: boolean = false;
  public showFriends: boolean = false;
  public showHistory: boolean = false;
  public url = '';
  @Input()
  public userToken: string;

  constructor(
    private apiProvide: ApiProvider,
    private authService: AuthService,
    private router: Router,
  ) {
    if (this.authService.loginStatus === LoginResponse.Fail) {
      this.router.navigate(['']);
      alert('You are not authenticated!');
    }
    else {
      this.imagesUrl();
      this.url = this.authService.urlImage;
    }
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
    this.user.email = this.authService.activeUser;
    this.user.userRole = "User";
    this.user.name = this.authService.activeUser;
    this.userMovies = mockData.MOVIE_LIST;
    this.userTvSeries = mockData.TV_SERIES;
    this.movies = this.userMovies;
    this.tvSeries = this.userTvSeries;

    this.apiProvide.getHistoryMovies().subscribe((movies: any) => {
      console.log(movies);
      this.history = movies;
    })

    this.apiProvide.getFriends(this.authService.activeUser).subscribe((data: any) => {
      console.log(data);
      this.friends = [];
      data.forEach(friend => {
        this.friends.push(friend);
      });
    });

    this.apiProvide.getFriendsRequests().subscribe((data: any) => {
      console.log(data);
      this.requestFriends = [];
      data.forEach(friend => {
        this.requestFriends.push(friend);
      });
    });

    this.apiProvide.getNewFriends(this.authService.activeUser).subscribe((data: any) => {
      console.log(data);
      this.makeNewFriends = [];
      data.forEach(fr => {
        this.makeNewFriends.push(fr);
      })
    });

    // this.friends = ["Andrei", "Marian", "Ana", "Daniel"];
    // this.makeNewFriends = ["Andrei New", "Marian New", "Ana New", "Daniel New"];

    // for (let i = 0; i < 30; i++) {
    //   this.friends.push({
    //     id: "32",
    //     name: "Gigi",
    //     movies: [
    //       {
    //         name: "Film1",
    //         duration: 120,
    //         releaseDate: new Date(),
    //         author: "Autor1",
    //         description: "Description1",
    //         image:
    //           "https://i1.wp.com/alankrode.com/wp-content/uploads/2018/06/New-York-Confidential-DVD-cover-360w-500h-180x250.jpg?ssl=1"
    //       },
    //       {
    //         name: "Film2",
    //         duration: 120,
    //         releaseDate: new Date(),
    //         author: "Autor2",
    //         description: "Description2",
    //         image:
    //           "http://www.magazinemix.co.uk/wp-content/uploads/2015/10/filmmonthlyjul1990-180x250.jpg"
    //       },
    //       {
    //         name: "Film3",
    //         duration: 120,
    //         releaseDate: new Date(),
    //         author: "Autor3",
    //         description: "Description3",
    //         image:
    //           "https://i1.wp.com/alankrode.com/wp-content/uploads/2018/06/New-York-Confidential-DVD-cover-360w-500h-180x250.jpg?ssl=1"
    //       },
    //       {
    //         name: "Film3",
    //         duration: 120,
    //         releaseDate: new Date(),
    //         author: "Autor3",
    //         description: "Description3",
    //         image:
    //           "http://www.topprimenews.xyz/wp-content/uploads/2019/08/Mantesh-Kumar-180x250.jpg"
    //       }
    //     ],
    //     tvSeries: [
    //       {
    //         id: 1,
    //         name: "Serial1",
    //         releaseDate: new Date(),
    //         noEpisodes: 4,
    //         noSeasons: 4,
    //         description: "Description1",
    //         image:
    //           "https://www.omofon.com/wp-content/uploads/2018/07/top-seriale-Netflix-e1531303094136.jpg"
    //       },
    //       {
    //         id: 1,
    //         name: "Serial1",
    //         releaseDate: new Date(),
    //         noEpisodes: 4,
    //         description: "Description1",
    //         noSeasons: 4,
    //         image:
    //           "https://www.omofon.com/wp-content/uploads/2018/07/top-seriale-Netflix-e1531303094136.jpg"
    //       },
    //       {
    //         id: 1,
    //         name: "Serial1",
    //         releaseDate: new Date(),
    //         noEpisodes: 4,
    //         noSeasons: 4,
    //         description: "Description1",
    //         image:
    //           "https://www.omofon.com/wp-content/uploads/2018/07/top-seriale-Netflix-e1531303094136.jpg"
    //       },
    //       {
    //         id: 1,
    //         name: "Serial1",
    //         releaseDate: new Date(),
    //         noEpisodes: 4,
    //         noSeasons: 4,
    //         description: "Description1",
    //         image:
    //           "https://www.omofon.com/wp-content/uploads/2018/07/top-seriale-Netflix-e1531303094136.jpg"
    //       }
    //     ]
    //   });
    // }
    //fetch user details
    // fetch("url")
    // .then(response => response.json())
    // .then(user => {
    //   this.user = user;
    // })
    // .catch(err => {
    //   alert(err.message)
    // })

    //fetch history
    // fetch("url")
    // .then(response => response.json())
    // .then(historyItems => {
    //   historyItems.forEach(item =>{
    //   let newHistoryItem = {
    //      image : item.image,
    //      name : item.name,
    //      releaseYear : item.releaseYear,
    //      duration : item.duration,
    //      description : item.description,
    //      director : item.director,
    //      genres : item.genres
    //   })
    //   if()
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
    //     newMovie.releaseYear = movie.releaseYear;
    //     newMovie.duration = movie.duration;
    //     newMovie.description = movie.description;
    //     newMovie.director = movie.director;
    //     newMovie.genres = movie.genres
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
    //     newSerie.genres = movie.genres;
    //     newSerie.director = movie.director;
    //     newSerie.releaseYear = movie.releaseYear;
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


  public refreshApi() {
    this.apiProvide.getFriends(this.authService.activeUser).subscribe((data: any) => {
      console.log(data);
      this.friends = [];
      data.forEach(friend => {
        this.friends.push(friend);
      });
    });

    this.apiProvide.getFriendsRequests().subscribe((data: any) => {
      console.log(data);
      this.requestFriends = [];
      data.forEach(friend => {
        this.requestFriends.push(friend);
      });
    });

    this.apiProvide.getNewFriends(this.authService.activeUser).subscribe((data: any) => {
      console.log(data);
      this.makeNewFriends = [];
      data.forEach(fr => {
        this.makeNewFriends.push(fr);
      })
    });
    console.log('22222222222222222222222222222222222222222222222222222222222222');
  }

  public imagesUrl(): string[] {
    mockData.MOVIE_LIST.forEach(x => {
      if (this.images.filter(y => y === x.image).length === 0)
        this.images.push(x.image);
    });

    return this.images;
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        // this.url = event.target.result.toString();
        // this.authService.urlImage = this.url;
        // this.apiProvide.addProfileImage("this.url imaginea mea22").subscribe(data => console.log(data));
      }
    }
  }
  public delete() {
    this.url = null;
  }


}
