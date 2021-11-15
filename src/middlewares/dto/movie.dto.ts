import {ActorDto} from "./actor.dto";

export interface MovieDto{
    id: string,
    name: string,
    type: string,
    releaseData: string,
    description: string,
    actors: ActorDto[]
}

export interface createMovieRequest{
    name: string,
    type: string,
    releaseDate: string,
    description: string,
    actors: ActorDto[]
}

export interface updateMovieRequest{
    name: string,
    type: string,
    releaseDate: string,
    description: string
}
