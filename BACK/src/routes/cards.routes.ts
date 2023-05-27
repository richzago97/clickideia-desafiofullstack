import { Router } from "express";
import {
    createCardController,
    deleteCardController,
    listCardsController,
    updateCardController,
} from "../controllers/cards/cards.controller";
import { isValidTokenMiddleware } from "../middlewares/isValidSessionToken.middleware";
import { validateSchema } from "../middlewares/validateSchema.middleware";
import { createCardValidator } from "../schemas/cardsSchema";

export const cardsRouter: Router = Router();

cardsRouter.post(
    "",
    isValidTokenMiddleware,
    validateSchema(createCardValidator),
    createCardController
);
cardsRouter.get("", isValidTokenMiddleware, listCardsController);
cardsRouter.put("/:id", isValidTokenMiddleware, updateCardController);
cardsRouter.delete("/:id", isValidTokenMiddleware, deleteCardController);
