import { Movie } from "../models/movie";
import { TvSeries } from "../models/tvSeries";

export const Genres = [
  "Action",
  "Animation",
  "Comedy",
  "Crime",
  "Drama",
  "Experimental",
  "Fantasy",
  "Historical",
  "Horror",
  "Romance",
  "Science Fiction",
  "Thriller",
  "Western",
  "Other"
];

export const MOVIE_LIST: Movie[] = [
  {
    name: "Hotel Terminus: The Life and Times of Klaus Barbie",
    duration: 120,
    genres: ["romantic"],
    releaseYear: "1988",
    director: "Marcel Ophüls",
    description:
      "A documentary about Klaus Barbie, the Gestapo chief of Lyon, and his life after the war.",
    image:
      "http://snagfilms-a.akamaihd.net/a2/f5/ba7c86794ad38255d4879e47109a/hotelterminus-214x317.jpg?impolicy=resize&w=300&h=444"
  },
  {
    name: "Alive Inside",
    duration: 78,
    genres: ["romantic"],
    releaseYear: "1998",
    director: "Marcel Ophüls",
    description:
      "Dan Cohen, founder of the nonprofit organization Music & Memory, fights against a broken healthcare system to demonstrate music's ability to combat memory loss and restore a deep sense of self to those suffering from it.",
    image:
      "http://snagfilms-a.akamaihd.net/7e/97/ae2ac5fe459b848775ecf047e86b/aliveinside-214x317.jpg?impolicy=resize&w=300&h=444"
  },
  {
    name: "Bohemian Rapsody",
    duration: 120,
    genres: ["romantic"],
    releaseYear: "1989",
    director: "Marcel Ophüls",
    description:
      "The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985).",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_SY1000_CR0,0,674,1000_AL_.jpg"
  },
  {
    name: "Once Upon a Time ... in Hollywood",
    duration: 161,
    genres: ["romantic"],
    releaseYear: "1980",
    director: "Marcel Ophüls",
    description:
      "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
  },
  {
    name: "Inception",
    duration: 120,
    genres: ["romantic"],
    releaseYear: "1988",
    director: "Marcel Ophüls",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
  },
  {
    name: "The Great Gatsby",
    duration: 143,
    genres: ["romantic"],
    releaseYear: "1988",
    director: "Marcel Ophüls",
    description:
      "A writer and wall street trader, Nick, finds himself drawn to the past and lifestyle of his millionaire neighbor, Jay Gatsby.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_SY1000_SX666_AL_.jpg"
  },
  {
    name: "Shakespeare in Love",
    duration: 123,
    genres: ["romantic"],
    releaseYear: "1988",
    director: "Marcel Ophüls",
    description:
      "A young Shakespeare, out of ideas and short of cash, meets his ideal woman and is inspired to write one of his most famous plays.",
    image:
      "https://m.media-amazon.com/images/M/MV5BM2ZkNjM5MjEtNTBlMC00OTI5LTgyYmEtZDljMzNmNzhiNzY0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY1000_CR0,0,703,1000_AL_.jpg"
  },
  {
    name: "The Hobbit: An Unexpected Journey",
    duration: 169,
    genres: ["romantic"],
    releaseYear: "1988",
    director: "Marcel Ophüls",
    description:
      "A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and the gold within it from the dragon Smaug.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
  },
  {
    name: "Fantastic Beasts and Where to Find Them",
    duration: 132,
    genres: ["romantic"],
    releaseYear: "1988",
    director: "Marcel Ophüls",
    description:
      "The adventures of writer Newt Scamander in New York's secret community of witches and wizards seventy years before Harry Potter reads his book in school.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjMxOTM1OTI4MV5BMl5BanBnXkFtZTgwODE5OTYxMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
  },
  {
    name: "Harry Potter and the Deathly Hallows: Part 1",
    duration: 146,
    genres: ["romantic"],
    releaseYear: "1988",
    director: "Marcel Ophüls",
    description:
      "As Harry (Daniel Radcliffe), Ron (Rupert Grint), and Hermione (Emma Watson) race against time and evil to destroy the Horcruxes, they uncover the existence of the three most powerful objects in the wizarding world: the Deathly Hallows.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
  },
  {
    name: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    duration: 143,
    genres: ["romantic"],
    releaseYear: "1988",
    director: "Marcel Ophüls",
    description:
      "Four kids travel through a wardrobe to the land of Narnia and learn of their destiny to free it with the guidance of a mystical lion.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTc0NTUwMTU5OV5BMl5BanBnXkFtZTcwNjAwNzQzMw@@._V1_SY1000_CR0,0,676,1000_AL_.jpg"
  },
  {
    name: "Casablanca",
    duration: 102,
    genres: ["romantic"],
    releaseYear: "1988",
    director: "Marcel Ophüls",
    description:
      "A cynical American expatriate struggles to decide whether or not he should help his former lover and her fugitive husband escape French Morocco.",
    image:
      "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg"
  },
  {
    name: "Life Is Beautiful",
    duration: 116,
    genres: ["romantic"],
    releaseYear: "1988",
    director: "Marcel Ophüls",
    description:
      "When an open-minded Jewish librarian and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_SX670_AL_.jpg"
  },
  {
    name: "The Breakfast Club",
    duration: 97,
    genres: ["romantic"],
    releaseYear: "1988",
    director: "Marcel Ophüls",
    description:
      "Five high school students meet in Saturday detention and discover how they have a lot more in common than they thought.",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTM5N2ZmZTMtNjlmOS00YzlkLTk3YjEtNTU1ZmQ5OTdhODZhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,639,1000_AL_.jpg"
  },
  {
    name: "Green Book",
    duration: 130,
    genres: ["romantic"],
    releaseYear: "1988",
    director: "Marcel Ophüls",
    description:
      "A working-class Italian-American bouncer becomes the driver of an African-American classical pianist on a tour of venues through the 1960s American South.",
    image:
      "https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
  }
];

export const TV_SERIES: TvSeries[] = [
  {
    id: 1,
    name: "Friends",
    genres: ["romantic"],
    releaseYear: "1988",
    noEpisodes: 10,
    noSeasons: 10,
    director: "Marcel Ophüls",
    description:
      "Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg"
  },
  {
    id: 2,
    name: "The Big Bang Theory",
    genres: ["romantic"],
    releaseYear: "1988",
    noEpisodes: 24,
    noSeasons: 12,
    director: "Marcel Ophüls",
    description:
      "A woman who moves into an apartment across the hall from two brilliant but socially awkward physicists shows them how little they know about life outside of the laboratory.",
    image:
      "https://m.media-amazon.com/images/M/MV5BY2FmZTY5YTktOWRlYy00NmIyLWE0ZmQtZDg2YjlmMzczZDZiXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
  },
  {
    id: 3,
    name: "How I Met Your Mother",
    genres: ["romantic"],
    releaseYear: "1988",
    noEpisodes: 22,
    noSeasons: 9,
    director: "Marcel Ophüls",
    description:
      "A father recounts to his children, through a series of flashbacks, the journey he and his four best friends took leading up to him meeting their mother.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZWJjMDEzZjUtYWE1Yy00M2ZiLThlMmItODljNTAzODFiMzc2XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
  },
  {
    id: 4,
    name: "Family Guy",
    genres: ["romantic"],
    releaseYear: "1988",
    noEpisodes: 23,
    noSeasons: 18,
    director: "Marcel Ophüls",
    description:
      "In a wacky Rhode Island town, a dysfunctional family strive to cope with everyday life as they are thrown from one crazy scenario to another.",
    image:
      "https://m.media-amazon.com/images/M/MV5BODEwZjEzMjAtNjQxMy00Yjc4LWFlMDAtYjhjZTAxNDU3OTg3XkEyXkFqcGdeQXVyOTM2NTM4MjA@._V1_SY1000_SX750_AL_.jpg"
  },
  {
    id: 5,
    name: "Peaky Blinders",
    genres: ["romantic"],
    releaseYear: "1988",
    noEpisodes: 6,
    noSeasons: 7,
    director: "Marcel Ophüls",
    description:
      "A gangster family epic set in 1919 Birmingham, England; centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTkzNjEzMDEzMF5BMl5BanBnXkFtZTgwMDI0MjE4MjE@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
  },
  {
    id: 6,
    name: "Game of Thrones",
    genres: ["romantic"],
    releaseYear: "1988",
    noEpisodes: 10,
    noSeasons: 8,
    director: "Marcel Ophüls",
    description:
      "Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for thousands of years.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjA5NzA5NjMwNl5BMl5BanBnXkFtZTgwNjg2OTk2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
  },
  {
    id: 7,
    name: "Vikings",
    genres: ["romantic"],
    releaseYear: "1908",
    noEpisodes: 9,
    noSeasons: 6,
    director: "Marcel Ophüls",
    description:
      "Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore - and raid - the distant shores across the ocean.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNjIzZjljZmQtOGNiYi00YmY2LWE1MGYtN2VlMmEyZDBlMzRmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_SX666_AL_.jpg"
  },
  {
    id: 8,
    name: "South Park",
    genres: ["romantic"],
    releaseYear: "1998",
    noEpisodes: 9,
    director: "Marcel Ophüls",
    noSeasons: 24,
    description:
      "Follows the misadventures of four irreverent grade-schoolers in the quiet, dysfunctional town of South Park, Colorado.",
    image:
      "https://m.media-amazon.com/images/M/MV5BOGE2YWUzMDItNTg2Ny00NTUzLTlmZGYtNWMyNzVjMjQ3MThkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg"
  },
  {
    id: 9,
    name: "Sherlock",
    genres: ["romantic"],
    releaseYear: "1988",
    noEpisodes: 4,
    noSeasons: 4,
    director: "Marcel Ophüls",
    description:
      "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_.jpg"
  },
  {
    id: 10,
    name: "Chernobyl",
    genres: ["romantic"],
    releaseYear: "1988",
    noEpisodes: 5,
    noSeasons: 1,
    director: "Marcel Ophüls",
    description:
      "In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world's worst man-made catastrophes.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTEyYmIzMDUtNWMwNC00Y2Q1LWIyZTgtMGY1YzUxOTAwYTAwXkEyXkFqcGdeQXVyMjIyMTc0ODQ@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
  },
  {
    id: 11,
    name: "Money Heist",
    genres: ["romantic"],
    releaseYear: "1988",
    noEpisodes: 9,
    noSeasons: 4,
    director: "Marcel Ophüls",
    description:
      "A group of unique robbers assault the Factory of Moneda and Timbre to carry out the most perfect robbery in the history of Spain and take home 2.4 billion euros.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNmYxZWNlMDAtYzczZC00M2ViLWIwYjctMDg3M2QyN2E1MzlmXkEyXkFqcGdeQXVyNjE4ODA3NTY@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
  },
  {
    id: 12,
    name: "Riverdale",
    genres: ["romantic"],
    releaseYear: "1988",
    noEpisodes: 13,
    noSeasons: 4,
    director: "Marcel Ophüls",
    description:
      "While navigating the troubled waters of romance, school and family, Archie and his gang become entangled in dark Riverdale mysteries.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDYxOTU0NDYtYzg2MC00YzgyLTg1YzctMDc1MGJmOGIzMTc3XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
  },
  {
    id: 13,
    name: "The Crown",
    genres: ["romantic"],
    releaseYear: "1988",
    noEpisodes: 10,
    noSeasons: 4,
    director: "Marcel Ophüls",
    description:
      "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGI1ODkzZDQtZTYxYS00MTg1LWFlY2QtMTM5MGNhNWRhYmVmXkEyXkFqcGdeQXVyNjU2ODM5MjU@._V1_SY1000_SX800_AL_.jpg"
  },
  {
    id: 14,
    name: "House",
    genres: ["romantic"],
    releaseYear: "1988",
    noEpisodes: 22,
    noSeasons: 8,
    director: "Marcel Ophüls",
    description:
      "An antisocial maverick doctor who specializes in diagnostic medicine does whatever it takes to solve puzzling cases that come his way using his crack team of doctors and his wits.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDA4NjQzN2ItZDhhNC00ZjVlLWFjNTgtMTEyNDQyOGNjMDE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,679,1000_AL_.jpg"
  },
  {
    id: 15,
    name: "Lie to Me",
    genres: ["romantic"],
    releaseYear: "1988",
    noEpisodes: 13,
    noSeasons: 3,
    director: "Marcel Ophüls",
    description:
      "About Cal Lightman, the world's leading deception expert who studies facial expressions and involuntary body language to expose the truth behind the lies.",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTc2MjA4MTM2OV5BMl5BanBnXkFtZTcwMTYzMzA1Mg@@._V1_.jpg"
  }
];
