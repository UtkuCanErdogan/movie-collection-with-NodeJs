import {DocumentDefinition} from "mongoose";
import {Actor} from "../../models/actor.model";
import {ActorDocument} from "../../models/actor.model";
import {ActorDto} from "../dto/actor.dto";

export const actorMapper = (input: DocumentDefinition<ActorDocument>) :ActorDto => {
    return {
        id: input._id,
        name: input.name,
        surname: input.surname,
        age: input.age,
        nationality: input.nationality
    }
}

export const listActorMapper = (input: DocumentDefinition<ActorDocument>[]): ActorDto[] => {
    return input.map(x => actorMapper(x));
}

