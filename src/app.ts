import * as express from 'express';
import connectDB from "./repositories/connect";
import { errorHandler } from "./middlewares/error-handler";
import { notFound } from "./middlewares/not-found";
import movieRouter from "./routes/movie.route";
import actorRouter from "./routes/actor.route";
import userRouter from "./routes/user.route";

const app = express();
app.use(express.json());
app.use("/api/movie", movieRouter);
app.use("/api/actor", actorRouter);
app.use("/api/user", userRouter);
app.use(errorHandler);
app.use(notFound);
const port = 3000 as number;
const connectionString = "MONGO_URI=mongodb://127.0.0.1:27017/movie" as string;

const start = async () => {
    try {
        await connectDB(connectionString);
        app.listen(port, () => console.log(port));
    }catch (e){
        console.log("error");
    }
}

start();


