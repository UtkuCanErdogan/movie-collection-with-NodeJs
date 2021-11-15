import {Movie, MovieDocument} from "../models/movie.model";
import {DocumentDefinition} from "mongoose";
import {movieMapper, listMovieMapper} from '../middlewares/mapper/movie.mapper';
import {MovieDto, createMovieRequest,updateMovieRequest} from "../middlewares/dto/movie.dto";

export const findAllMovies = async ():Promise<MovieDto[]> => {
    return listMovieMapper(await Movie.find({}));
}

export const findMovieById = async (id : string): Promise<MovieDto> => {
    return movieMapper(await Movie.findOne({_id:id}));
}

export const insertMovie = async (input: createMovieRequest): Promise<MovieDto> => {
    const user = await Movie.create(input);
    return movieMapper(user);
}

export const updateMovieById = async (id: string, input: updateMovieRequest):Promise<MovieDto> => {
    return movieMapper(await Movie.findOneAndUpdate({_id:id}, input,{new:true}));
}

export const deleteMovieById = async (id: string) => {
    return Movie.findOneAndDelete({_id:id});
}

