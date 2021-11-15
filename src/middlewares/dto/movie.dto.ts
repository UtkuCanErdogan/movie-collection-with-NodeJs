import {ActorDto} from "./actor.dto";

export interface MovieDto{
    id: string,
    name: string,
    type: string,
    releaseData: string,
    description: string
}

export interface createMovieRequest{
    name: string,
    type: string,
    releaseDate: string,
    description: string
}

export interface updateMovieRequest{
    name: string,
    type: string,
    releaseDate: string
}
