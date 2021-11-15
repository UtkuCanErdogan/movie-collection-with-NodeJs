import * as express from 'express';
import {createUser, getAllUsers, getUserById, updateUser, deleteUser} from "../controllers/user.controller";
const userRouter = express.Router();

userRouter.route("/getUsers").get(getAllUsers);
userRouter.route("/create").post(createUser);
userRouter.route("/:id").get(getUserById).patch(updateUser).delete(deleteUser);

export default userRouter;
