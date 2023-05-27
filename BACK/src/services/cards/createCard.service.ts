import { Card } from "../../entities/cards.entity";
import { AppDataSource } from "../../data-source";
const createCardService = async (data: any) => {
    const cardRepo = AppDataSource.getRepository(Card);

    const card = cardRepo.create(data);

    await cardRepo.save(card);

    return card;
};

export { createCardService };
