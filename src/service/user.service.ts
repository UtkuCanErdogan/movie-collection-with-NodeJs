import {createUserRequest, updateUserRequest, UserDto} from "../middlewares/dto/user.dto";
import {listUserMapper, userMapper} from "../middlewares/mapper/user.mapper";
import {User} from "../models/user.model";


export const findAllUsers = async (): Promise<UserDto[]> => {
    return listUserMapper(await User.find({}));
}

export const findUserById = async (id:string): Promise<UserDto> => {
    return userMapper(await User.findOne({_id:id}));
}

export const insertUser = async (input: createUserRequest): Promise<UserDto> => {
    return userMapper(await User.create(input));
}

export const updateUserById = async (input: updateUserRequest, id: string): Promise<UserDto> => {
    return userMapper(await User.findOneAndUpdate({_id: id}, input, {new:true}));
}

export const deleteUserById = async (id: string):Promise<Boolean> => {
    try{
        await User.findOneAndDelete({_id: id});
        return true;
    }
    catch (e){
        return false;
    }
}
