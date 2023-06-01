import { Repository, TreeRepository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Card } from "../../entities/cards.entity";

const listCardsService = async () => {
    const cardsRepository: TreeRepository<Card> =
        AppDataSource.getTreeRepository(Card);

    const cards: Card[] = await cardsRepository.find();

    return cards;
};
export { listCardsService };
