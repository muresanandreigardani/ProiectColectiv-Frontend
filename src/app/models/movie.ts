export interface MovieInterface {
    name: string,
    duration: number,
    releaseDate: Date,
    author: string,
    description: string,
    image: string    
}

export class Movie implements MovieInterface {
    name: string;    
    duration: number;
    releaseDate: Date;
    author: string;
    description: string;
    image: string;
}