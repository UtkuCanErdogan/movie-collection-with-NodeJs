import * as mongoose from 'mongoose';
import {Movie} from "./movie.model";

export interface ActorDocument extends mongoose.Document{
    name: string,
    surname: string,
    age: number,
    nationality: string,
    createdAt: Date
}

const actorSchema = new mongoose.Schema({
    name : {type: String, required:[true, "Name is required"]},
    surname: {type: String, required:[true, "Surname is required"]},
    age: {type: Number, required:[true, "Age is required"]},
    nationality: {type: String, required:true},
},{
    timestamps:true, versionKey:false
});

export const Actor = mongoose.model('Actor', actorSchema);
