import "reflect-metadata";
import express, { Application } from "express";

import handleErrorMiddleware from "./middlewares/handleError.middleware";
import { sessionRouter } from "./routes/session.routes";
import { cardsRouter } from "./routes/cards.routes";

const app: Application = express();
app.use(express.json());
let cors = require("cors");

app.use(cors());
app.use("/login", sessionRouter);
app.use("/cards", cardsRouter);

app.use(handleErrorMiddleware);

export default app;
