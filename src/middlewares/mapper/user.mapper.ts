import {DocumentDefinition} from "mongoose";
import {User, UserDocument} from "../../models/user.model";
import {UserDto} from "../dto/user.dto";
import {movieMapper} from "./movie.mapper";
import {MovieDto} from "../dto/movie.dto";

export const userMapper = (input: DocumentDefinition<UserDocument>) => {
    return{
        id: input._id,
        email: input.email,
        name: input.name,
        surname: input.surname,
        age: input.age,
        username: input.username
    };
}

export const listUserMapper = (input: DocumentDefinition<UserDocument>[]): UserDto[] => {
    return input.map(x => userMapper(x));
}
