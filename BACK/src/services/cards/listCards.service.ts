import { AppDataSource } from "../../data-source";
import { Card } from "../../entities/cards.entity";

const listCardsService = async () => {
    const cardsRepository = AppDataSource.getTreeRepository(Card);

    const cards = await cardsRepository.find();

    return cards;
};
export { listCardsService };
