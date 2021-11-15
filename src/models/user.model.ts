import * as mongoose from 'mongoose';

export interface UserDocument extends mongoose.Document{
    email: string,
    name: string,
    surname: string,
    age: number,
    username: string,
    password: string
}

const userSchema = new mongoose.Schema({
    email : {type: String, required:true, unique:true},
    name: {type:String, required:true, minlength:3, maxlength:20},
    surname : {type:String, required:true, minlength:3, maxlength:20},
    age: {type: Number, default:null},
    username: {type:String, required:true, unique:true, minlength:5, maxlength:20},
    password: {type:String, required:true, minlength:6, maxlength:30}
});

export const User = mongoose.model('User', userSchema);
