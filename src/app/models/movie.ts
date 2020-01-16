export interface MovieInterface {
  name: string;
  duration: number;
  releaseYear: string;
  director: string;
  description: string;
  image: string;
  genres: string[];
}

export class Movie implements MovieInterface {
  name: string;
  duration: number;
  releaseYear: string;
  director: string;
  genres: string[];
  description: string;
  image: string;
}
