import * as express from 'express';
const movieRouter = express.Router();
import {getAllMovies, getMovieById, createMovie, updateMovie, deleteMovie} from "../controllers/movie.controller";

movieRouter.route("/movies").get(getAllMovies);
movieRouter.route("/create").post(createMovie);
movieRouter.route("/:id").get(getMovieById).patch(updateMovie).delete(deleteMovie);

export default movieRouter;


