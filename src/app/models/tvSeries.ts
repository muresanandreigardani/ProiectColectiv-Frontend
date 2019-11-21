import { Time } from '@angular/common';

export interface SeasonInterface {
    name: string,
    description: string,
    noEpisodes: number,
    image: string
}

export interface EpisodeInterface {
    name: string,
    description: string,
    duration: string,
    image: string
}

export interface TvSeriesInterface {
    id: number,
    name: string,
    releaseDate: Date,
    noEpisodes: number,
    noSeasons: number,
    image: string;
}

export class TvSeries implements TvSeriesInterface {
    image: string;
    id: number;
    name: string;
    releaseDate: Date;
    noEpisodes: number;
    noSeasons: number;
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