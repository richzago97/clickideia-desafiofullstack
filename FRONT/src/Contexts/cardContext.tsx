import React, { createContext, useEffect, useState } from "react";
import { CardProps } from "../Interfaces/cards.interface";
import { IProvider } from "../Interfaces/Global";
import api from "../Services/api";

interface CardsContextData {
    cards: CardProps[];
    token: string;
    title: string;
    list: string;
    content: string;
    loading: boolean;
    editMode: boolean;
    currentCardIndex: number;
    addCard: (card: CardProps) => void;
    setCards: (cards: CardProps[]) => void;
    setTitle: (title: string) => void;
    setContent: (list: string) => void;
    setList: (list: string) => void;
    setCurrentCardIndex: (card: any) => void;
    deleteCard: (card: string) => void;
    setEditMode: (card: any) => any;
    updateCard: (card: any) => void;
}

export const CardsContext = createContext<CardsContextData>(
    {} as CardsContextData
);

export const CardsProvider = ({ children }: IProvider) => {
    const [cards, setCards] = useState<CardProps[]>([]);
    const [token, setToken] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [list, setList] = useState<string>("");
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        const login = async () => {
            try {
                const response = await api.post("/login", {
                    login: "richard",
                    senha: "1234",
                });

                const token = response.data.token;

                setToken(token);
            } catch (error) {
                console.error("Erro ao fazer login: ", error);
            }
        };

        login();

        const fetchCards = async () => {
            try {
                const response = await api.get("/cards", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const responseData = response.data;

                if (responseData && responseData.length > 0) {
                    setCards(responseData);
                    localStorage.setItem("cards", JSON.stringify(responseData));
                }
            } catch (error) {
                console.error("Erro ao obter os cards:", error);
            } finally {
                setLoading(false);
            }
        };

        if (token) {
            fetchCards();
        }
    }, [token]);

    const addCard = async (card: CardProps) => {
        try {
            // Definir a propriedade 'lista' como 'To Do' antes de criar o card
            card.lista = "To Do";
            // Fazer a requisição para criar o card na API
            const response = await api.post("/cards", card, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            // Obtém o card criado a partir da resposta da API
            const createdCard = response.data;

            // Adicionar o card criado ao contexto de cards
            setCards([...cards, createdCard]);

            localStorage.setItem(
                "cards",
                JSON.stringify([...cards, createdCard])
            );
        } catch (error) {
            console.error("Erro ao criar o card:", error);
        }
    };

    const deleteCard = async () => {
        try {
            const cardId = cards[currentCardIndex]?.id;

            if (cardId) {
                // Atualizar o índice do card atual para exibir o card anterior (caso exista)
                setCurrentCardIndex((prevIndex: number) =>
                    prevIndex >= cards.length - 1
                        ? Math.max(prevIndex - 1, 0)
                        : prevIndex
                );

                // Fazer a requisição DELETE à API
                await api.delete(`/cards/${cardId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                // Remover o card localmente
                const updatedCards = cards.filter(
                    (card: any) => card.id !== cardId
                );
                setCards(updatedCards);
            }
        } catch (error) {
            console.error("Erro ao remover o card:", error);
        }
    };

    const updateCard = async () => {
        try {
            const updatedCard = {
                ...cards[currentCardIndex],
                titulo: title,
                conteudo: content,
            };

            // Fazer a requisição PUT para atualizar o card na API
            await api.put(`/cards/${updatedCard.id}`, updatedCard, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            // Atualizar o card no estado local
            const updatedCards = [...cards];
            updatedCards[currentCardIndex] = updatedCard;
            setCards(updatedCards);

            // Atualizar o armazenamento local
            localStorage.setItem("cards", JSON.stringify(updatedCards));

            setEditMode(false); // Voltar para o modo de visualização
        } catch (error) {
            console.error("Erro ao atualizar o card:", error);
        }
    };

    return (
        <CardsContext.Provider
            value={{
                cards,
                addCard,
                setCards,
                token,
                title,
                content,
                list,
                currentCardIndex,
                loading,
                editMode,
                setCurrentCardIndex,
                setTitle,
                setContent,
                setList,
                setEditMode,
                deleteCard,
                updateCard,
            }}
        >
            {children}
        </CardsContext.Provider>
    );
};
