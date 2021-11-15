import {Actor} from "../models/actor.model";
import {actorMapper, listActorMapper} from '../middlewares/mapper/actor.mapper';
import {ActorDto, createActorRequest, updateActorRequest} from "../middlewares/dto/actor.dto";

export const findActor = async (id: string): Promise<ActorDto> => {
    return actorMapper(await Actor.findOne({_id:id}));
}

export const findActors = async (): Promise<ActorDto[]> =>{
    return listActorMapper(await Actor.find({}));
}

export const insertActor = async (input: createActorRequest):Promise<ActorDto> => {
    return actorMapper(await Actor.create(input));
}

export const updateActorById = async (request: updateActorRequest, id: string): Promise<ActorDto> => {
    return actorMapper(await Actor.findOneAndUpdate({_id: id}, request, {new: true}));
}

export const deleteActorById = (id: string) => {
    return Actor.findOneAndDelete({_id:id});
}
