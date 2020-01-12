import { Time } from "@angular/common";

export interface SeasonInterface {
  name: string;
  description: string;
  noEpisodes: number;
  image: string;
}

export interface EpisodeInterface {
  name: string;
  description: string;
  duration: string;
  image: string;
}

export interface TvSeriesInterface {
  id: number;
  name: string;
  releaseYear: string;
  description: string;
  noEpisodes: number;
  noSeasons: number;
  image: string;
  genres: string;
}

export class TvSeries implements TvSeriesInterface {
  id: number;
  name: string;
  genres: string;
  releaseYear: string;
  description: string;
  noEpisodes: number;
  noSeasons: number;
  image: string;
}

export class Season implements SeasonInterface {
  image: string;
  name: string;
  description: string;
  noEpisodes: number;
}

export class Episode implements EpisodeInterface {
  image: string;
  name: string;
  description: string;
  duration: string;
}
