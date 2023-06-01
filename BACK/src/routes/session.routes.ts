import { Router } from "express";
import { clientSessionController } from "../controllers/session/clientSession.controller";

export const sessionRouter: Router = Router();

sessionRouter.post("", clientSessionController);
