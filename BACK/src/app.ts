import "reflect-metadata";

import express, { Application } from "express";
import sessionRouter from "./routes/session.routes";

const app: Application = express();
app.use(express.json());

app.use("/login", sessionRouter);

export default app;
