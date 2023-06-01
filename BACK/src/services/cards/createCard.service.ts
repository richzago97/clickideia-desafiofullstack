import { Card } from "../../entities/cards.entity";
import { AppDataSource } from "../../data-source";
import { CardData } from "../../interfaces/cards.interface";
import { Repository } from "typeorm";
const createCardService = async (data: CardData): Promise<Card> => {
    const cardRepo: Repository<Card> = AppDataSource.getRepository(Card);

    const card: Card = cardRepo.create(data);

    await cardRepo.save(card);

    return card;
};

export { createCardService };
