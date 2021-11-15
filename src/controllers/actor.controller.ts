import {Request, Response} from "express";
import {findActor, findActors, insertActor, deleteActorById, updateActorById} from "../service/actor.service";
import {actorNotFoundError} from "../errors/custom.error";

export const getActorById = (req:Request, res:Response) => {
    const {id: movieId} = req.params;
    findActor(movieId).then((response) => {
        if (!response) return actorNotFoundError;
        res.status(200).send(response);
    });
}

export const getAllActors = (req:Request, res:Response) => {
    findActors().then((response) => {
        res.status(200).send(response);
    });
}

export const createActor = (req:Request, res:Response) => {
    insertActor(req.body).then((response) => {
        res.status(201).send(response);
    }).catch((e) => {
        res.status(500).send({msg: e.message});
    });
}

export const updateActor = (req:Request, res:Response) => {
    const {id: actorId} = req.params;
    updateActorById(req.body, actorId).then((response) => {
        res.status(200).send(response);
    });
}

export const deleteActor = (req:Request, res:Response) => {
    const {id: actorId} = req.params;
    deleteActorById(actorId).then((response) => {
        if (!response) return actorNotFoundError;
        res.status(200).send({msg: "success"});
    });
}
