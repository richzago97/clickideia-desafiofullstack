import { Router } from "express";
import { clientSessionController } from "../controllers/session/clientSession.controller";

const sessionRouter = Router();

sessionRouter.post("", clientSessionController);

export default sessionRouter;
