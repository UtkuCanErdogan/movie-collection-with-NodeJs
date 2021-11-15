import {Request, Response} from "express";
import {deleteUserById, findAllUsers, findUserById, insertUser, updateUserById} from "../service/user.service";
import {userNotFoundError} from "../errors/custom.error";


export const getAllUsers = async (req:Request, res:Response) => {
    findAllUsers().then((response) => {
        if (response) res.status(200).send({msg: "success"});
    }).catch((e) => {
        res.status(500).send({msg: "something went wrong, please try again later"});
    });
}

export const getUserById = async (req:Request, res:Response) => {
    const {id: userId} = req.params;
    findUserById(userId).then((response) => {
        if (!response) userNotFoundError(404);
        res.status(200).send(response);
    }).catch((e) => {
       res.status(500).send({msg: "something went wrong, please try again later"});
    });
}

export const createUser = async (req:Request, res:Response) => {
    insertUser(req.body).then((response) => {
        res.status(201).send(response);
    }).catch((e) => {
        res.status(500).send({msg: e.message});
    });
}

export const updateUser = async (req:Request, res:Response) => {
    const {id: userId} = req.params;
    updateUserById(req.body, userId).then((response) => {
        res.status(200).send(response);
    }).catch((e) => {
       res.status(500).send({msg: "something went wrong, please try again later"});
    });
}

export const deleteUser = async (req:Request, res:Response) => {
    const {id: userId} = req.params;
    deleteUserById(userId).then((response) => {
        if (response) return res.status(200).send({msg: "Success"});
        userNotFoundError(404);
    }).catch((e) => {
        res.status(500).send({msg: "something went wrong, please try again later"});
    });
}
