import * as express from 'express';
import {getActorById, getAllActors, createActor, deleteActor, updateActor} from "../controllers/actor.controller";
const actorRouter = express.Router();

actorRouter.route("/actors").get(getAllActors);
actorRouter.route("/create").post(createActor);
actorRouter.route("/:id").get(getActorById).patch(updateActor).delete(deleteActor);

export default actorRouter;
