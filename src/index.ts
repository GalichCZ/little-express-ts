import express, { Express, Request, Response,json } from "express";
import dotenv from "dotenv";
import { routers } from "./router";
import cors from "cors";

dotenv.config();

const app: Express = express();
app.use(json());
app.use(cors());
const PORT = process.env.PORT;

routers.forEach((router) => {
    app.use("/api", router);
});

app.get("/api", (_req: Request, res: Response) => {
    res.send("Express + TS Server");
});

const start = () => {
    try {
        app.listen(PORT, () => {
            console.log("server started on", PORT);
        });
    } catch (error) {
        console.error(error);
    }
};

start();