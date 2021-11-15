import {Request, Response} from "express";
import {deleteMovieById, findAllMovies, findMovieById, insertMovie, updateMovieById} from "../service/movie.service";
import {movieNotFoundError} from "../errors/custom.error";

export const getAllMovies = async (req:Request, res:Response) => {
    findAllMovies().then((response) => {
        res.status(200).send(response);
    }).catch((e) => {
        res.status(500).send("something get wrong");
    });
}

export const getMovieById = async (req:Request, res:Response) => {
    const {id: movieId} = req.params;
    findMovieById(movieId).then((response) => {
        if(!response){
            return res.status(404).send("Movie Not Found");
        }
        res.status(200).send(response);
    }).catch((e) => {
        res.status(500).send({msg : e.message});
    })
}

export const createMovie = async (req:Request, res:Response) => {
    insertMovie(req.body).then((response) => {
        res.status(201).send(response);
    }).catch((e) => {
        res.status(500).send({msg : e.message});
    })
}

export const updateMovie = async (req:Request, res:Response) => {
    const {id: movieId} = req.params;
    updateMovieById(movieId, req.body).then((response) => {
        if (!response) return movieNotFoundError(404);
        res.status(200).send(response);
    })
}

export const deleteMovie = async (req:Request, res:Response) => {
    const {id: movieId} = req.params;
    deleteMovieById(movieId).then((response) => {
        if (!response){
            return res.status(404).send("Movie Not Found");
        }
        res.status(200).send({msg: "success"});
    }).catch((e) => {
        res.status(e.status).send({msg: e.message});
    });
}
