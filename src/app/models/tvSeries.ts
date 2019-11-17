import { Time } from '@angular/common';

export interface SeasonInterface {
    name: string,
    description: string,
    noEpisodes: number
}

export interface EpisodeInterface {
    name: string,
    description: string,
    duration: string,
}

export interface TvSeriesInterface {
    id: number,
    name: string,
    releaseDate: Date,
    noEpisodes: number,
    noSeasons: number
}

export class TvSeries implements TvSeriesInterface {
    id: number;    
    name: string;
    releaseDate: Date;
    noEpisodes: number;
    noSeasons: number;
}

export class Season implements SeasonInterface {
    name: string;    
    description: string;
    noEpisodes: number;
}

export class Episode implements EpisodeInterface {
    name: string;
    description: string;
    duration: string;
}