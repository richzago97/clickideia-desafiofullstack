import React, { createContext, useEffect, useState } from "react";
import { CardProps, ICardPropsUpdate } from "../Interfaces/cards.interface";
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
   createCard: (card: CardProps) => void;
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

   const listCards = async () => {
      try {
         const response = await api.get("/cards", {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });

         const responseData = response.data;

         if (responseData && responseData.length > 0) {
            setCards(responseData);
         }
      } catch (error) {
         console.error("Erro ao obter os cards:", error);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      const login = async () => {
         try {
            const response = await api.post("/login", {
               login: "clickideia",
               senha: "clk@123",
            });

            const token = response.data.token;

            setToken(token);
         } catch (error) {
            console.error("Erro ao fazer login: ", error);
         }
      };

      login();

      if (token) {
         listCards();
      }
   }, [token]);

   const createCard = async (card: CardProps) => {
      try {
         card.lista = "To Do";

         const response = await api.post("/cards", card, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });

         const createdCard = response.data;

         setCards((prevCards) => [...prevCards, createdCard]);

         window.location.reload();
      } catch (error) {
         console.error("Erro ao criar o card:", error);
      }
   };

   const deleteCard = async (cardId: string) => {
      try {
         await api.delete(`/cards/${cardId}`, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });

         const updatedCards = cards.filter((card) => card.id !== cardId);

         setCards(updatedCards);
         localStorage.setItem("cards", JSON.stringify(updatedCards));
      } catch (error) {
         console.error("Erro ao excluir o card:", error);
      }
   };

   useEffect(() => {
      if (token) {
         listCards();
      }
   }, [token]);
   const updateCard = async (updatedCard: ICardPropsUpdate) => {
      const { id, ...cardData } = updatedCard;

      try {
         await api.put(`/cards/${id}`, cardData, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });

         const updateKeys = updatedCard;

         const hasChanges = Object.keys(updateKeys).some(
            (key) =>
               updateKeys[key as keyof CardProps] !==
               updatedCard[key as keyof CardProps]
         );

         if (hasChanges) {
            updateCard(updatedCard);
         }

         window.location.reload();
         setEditMode(false);
      } catch (error) {
         console.error("Erro ao atualizar o card:", error);
      }
   };

   return (
      <CardsContext.Provider
         value={{
            cards,
            token,
            title,
            content,
            list,
            currentCardIndex,
            loading,
            editMode,
            setCards,
            setCurrentCardIndex,
            setTitle,
            setContent,
            setList,
            setEditMode,
            createCard,
            deleteCard,
            updateCard,
         }}
      >
         {children}
      </CardsContext.Provider>
   );
};
