import express, { Express } from "express";
import logger from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import { errorHandler } from "./utils";
import { authRouter, userProfileRouter } from "./routes/api";

dotenv.config();
export const app: Express = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", authRouter);
app.use("/api/user", userProfileRouter)

app.use(errorHandler);
