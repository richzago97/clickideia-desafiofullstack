import { AppDataSource } from "../../data-source";
import { Card } from "../../entities/cards.entity";
import { AppError } from "../../errors/appError";
import { listCardsService } from "./listCards.service";

const deleteCardService = async (cardId: string) => {
    const cardRepository = AppDataSource.getRepository(Card);

    const findCard = await cardRepository.findOne({
        where: { id: cardId },
    });

    if (!findCard) {
        throw new AppError("Card não encontrado", 404);
    }

    await cardRepository.remove(findCard);

    const cards = await listCardsService();

    return cards;
};
export { deleteCardService };
