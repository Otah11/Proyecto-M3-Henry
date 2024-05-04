import express from "express";
import morgan from "morgan";
import indexRouter from "./routes/indexRouter";
import cors from "cors";

const server = express();

//? middlewares
server.use(morgan("dev"))
server.use(express.json())
server.use(cors())
server.use(indexRouter)

export default server;