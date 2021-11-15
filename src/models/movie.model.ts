import * as mongoose from 'mongoose';
import {Actor, ActorDocument} from "./actor.model";

export interface MovieDocument extends mongoose.Document {
    name: string,
    type : string,
    releaseDate: string,
    description: string,
    createdAt: Date,
    actors: ActorDocument['_id']
}

const movieSchema = new mongoose.Schema({
    name: {type: String, required:true, maxlength:[50, 'Name can not be more 50']},
    type: {type:String, required:[true, 'Type is required'], enum:{values: ["ACTION","DRAMA", "COMEDY"], message:"{VALUE} is not supported"}},
    releaseDate: {
        type: String,
        required:[true, 'Release Date is required'],
        maxlength:[4, 'Date can not be more 4'],
        minlength:[4, 'Date should can be 4']},
    description: {
        type: String,
        required:[true, "Description is required"],
        maxlength:[500, "Description can not be more 500"],
        minlength:[50, "Description should be min 50 words "]},
    createdAt: {type: Date, default: Date.now()},
},{
    versionKey:false
});

export const Movie = mongoose.model<MovieDocument>('Movie', movieSchema);
