import { Request, Response } from "express";
import { createCardService } from "../../services/cards/createCard.service";
import { updateCardService } from "../../services/cards/updateCard.service";
import { listCardsService } from "../../services/cards/listCards.service";
import { deleteCardService } from "../../services/cards/deleteCard.service";

const createCardController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const cardData: any = req.validatedBody;
    const createdCard = await createCardService(cardData);
    return res.status(201).json(createdCard);
};

const listCardsController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const cards = await listCardsService();
    return res.json(cards);
};

const deleteCardController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const cardId: string = req.params.id;
    const deletedCard = await deleteCardService(cardId);
    return res.json(deletedCard);
};

const updateCardController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const cardData: any = req.body;
    const cardId: string = req.params.id;
    const updatedCard = await updateCardService(cardData, cardId);
    return res.status(200).json(updatedCard);
};

export {
    createCardController,
    listCardsController,
    updateCardController,
    deleteCardController,
};
