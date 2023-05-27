import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Card } from "../../entities/cards.entity";
import { AppError } from "../../errors/appError";
import { updateCard } from "../../interfaces/cards.interface";

const updateCardService = async (cardData: updateCard, card_id: string) => {
    const cardRepository: Repository<Card> = AppDataSource.getRepository(Card);

    const findCard = await cardRepository.findOne({
        where: { id: card_id },
    });

    if (!findCard) {
        throw new AppError("Card não encontrado", 404);
    }

    cardRepository.merge(findCard, cardData);
    const updatedCard = await cardRepository.save(findCard);

    return updatedCard;
};
export { updateCardService };
