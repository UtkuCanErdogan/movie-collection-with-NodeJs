import {CustomError} from "../errors/custom.error";

export const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomError){
        return res.status(err.statusCode).send({msg: err.message});
    }
    return res.status(err.status).send({msg: err.message});
}
