import {DocumentDefinition} from "mongoose";
import {MovieDocument} from "../../models/movie.model";
import {MovieDto} from "../dto/movie.dto";
import {listActorMapper} from "./actor.mapper";

export const movieMapper = (input: DocumentDefinition<MovieDocument>):MovieDto => {

    return {
        id: input._id,
        name: input.name,
        type: input.type,
        releaseData: input.releaseDate,
        description: input.description,
        actors: listActorMapper(input.actors)
    };
}

export const listMovieMapper = (input: DocumentDefinition<MovieDocument>[]):MovieDto[] => {
    return input.map(x => movieMapper(x));
}
