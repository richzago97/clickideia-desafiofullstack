import React, { useContext, useEffect, useState } from "react";
import { Container } from "./style";
import { BsTrashFill } from "react-icons/bs";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { CardsContext } from "../../../Contexts/cardContext";
import { CardProps } from "../../../Interfaces/cards.interface";

type CardListProps = {
    list: string;
};

export const CardList: React.FC<CardListProps> = ({ list }) => {
    const {
        cards,
        addCard,
        deleteCard,
        setCards,
        currentCardIndex,
        setCurrentCardIndex,
        loading,
        editMode,
        setEditMode,
        updateCard,
    } = useContext<any>(CardsContext);

    const goToPreviousCard = () => {
        setCurrentCardIndex((prevIndex: number) =>
            prevIndex === 0 ? cards.length - 1 : prevIndex - 1
        );
    };

    const goToNextCard = () => {
        setCurrentCardIndex((prevIndex: number) =>
            prevIndex === cards.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleRemoveCard = (cardId: string) => {
        deleteCard(cardId);
    };

    const handleEditCard = () => {
        const card = cards[currentCardIndex];
        setEditMode(card);
    };

    return (
        <Container>
            {loading ? (
                <div>Carregando...</div>
            ) : (
                <>
                    <h2>{list}</h2>
                    {cards.length > 0 ? (
                        <div>
                            {editMode ? (
                                <div className="edit">
                                    <input
                                        type="text"
                                        value={editMode.titulo}
                                        onChange={(e) =>
                                            setEditMode({
                                                ...editMode,
                                                titulo: e.target.value,
                                            })
                                        }
                                    />
                                    <textarea
                                        value={editMode.conteudo}
                                        onChange={(e) =>
                                            setEditMode({
                                                ...editMode,
                                                conteudo: e.target.value,
                                            })
                                        }
                                    />
                                    <button
                                        onClick={() => updateCard(editMode)}
                                    >
                                        Salvar
                                    </button>
                                </div>
                            ) : (
                                <div className="edit">
                                    <span>
                                        {cards[currentCardIndex].titulo}
                                        {console.log(
                                            cards[currentCardIndex].titulo
                                        )}
                                    </span>

                                    <FiEdit onClick={handleEditCard} />
                                </div>
                            )}
                            <div>
                                <span>{cards[currentCardIndex].conteudo}</span>
                            </div>
                        </div>
                    ) : (
                        <div>Não há cards.</div>
                    )}
                    <div className="icons">
                        <button onClick={goToPreviousCard}>
                            <BiChevronLeft />
                        </button>
                        <button
                            onClick={() =>
                                handleRemoveCard(cards[currentCardIndex]?.id)
                            }
                        >
                            <BsTrashFill />
                        </button>
                        <button onClick={goToNextCard}>
                            <BiChevronRight />
                        </button>
                    </div>
                </>
            )}
        </Container>
    );
};
