import React, { useContext, useState } from "react";
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
      deleteCard,
      setCards,
      currentCardIndex,
      setCurrentCardIndex,
      loading,
      editMode,
      setEditMode,
      updateCard,
   } = useContext<any>(CardsContext);
   const [editedCardTitle, setEditedCardTitle] = useState("");
   const [editedCardContent, setEditedCardContent] = useState("");

   const filteredCards = cards.filter((card: CardProps) => card.lista === list);

   const goToPreviousCard = () => {
      setCurrentCardIndex((prevIndex: number) =>
         prevIndex === 0 ? filteredCards.length - 1 : prevIndex - 1
      );
   };

   const goToNextCard = () => {
      setCurrentCardIndex((prevIndex: number) =>
         prevIndex === filteredCards.length - 1 ? 0 : prevIndex + 1
      );
   };

   const handleRemoveCard = (cardId: string) => {
      deleteCard(cardId);
   };

   const handleEditCard = () => {
      const card = cards[currentCardIndex];
      setEditedCardContent(card.content);
      setEditedCardTitle(card.title);
      setEditMode(card);
   };

   const handleMoveToNextList = () => {
      const card = filteredCards[currentCardIndex];

      if (list === "To Do") {
         const updatedCard = { ...card, lista: "Doing" };
         const updatedCards = cards.map((c: CardProps) =>
            c.id === card.id ? updatedCard : c
         );
         setCards(updatedCards);
         setCurrentCardIndex(0); 
      } else if (list === "Doing") {
         const updatedCard = { ...card, lista: "Done" };
         const updatedCards = cards.map((c: CardProps) =>
            c.id === card.id ? updatedCard : c
         );
         setCards(updatedCards);
         setCurrentCardIndex(0); 
      } else if (list === "Done") {
         const updatedCard = { ...card, lista: "Doing" };
         const updatedCards = cards.map((c: CardProps) =>
            c.id === card.id ? updatedCard : c
         );
         setCards(updatedCards);
         setCurrentCardIndex(0); 
      }
   };

   return (
      <>
         <Container>
            <h2>{list}</h2>
            {loading ? (
               <div>Carregando...</div>
            ) : (
               <>
                  {filteredCards.length > 0 ? (
                     <>
                        <div className="edit">
                           {editMode &&
                           editMode.id ===
                              filteredCards[currentCardIndex].id ? (
                              <div className="edit">
                                 <input
                                    type="text"
                                    value={editedCardTitle}
                                    onChange={(e) =>
                                       setEditedCardTitle(e.target.value)
                                    }
                                 />
                                 <textarea
                                    value={editedCardContent}
                                    onChange={(e) =>
                                       setEditedCardContent(e.target.value)
                                    }
                                 />
                                 <button
                                    onClick={() => {
                                       const updatedCard = {
                                          ...editMode,
                                          titulo: editedCardTitle,
                                          conteudo: editedCardContent,
                                       };
                                       updateCard(updatedCard);
                                       setEditMode(null);
                                    }}
                                 >
                                    Salvar
                                 </button>
                              </div>
                           ) : (
                              <>
                                 <div className="title">
                                    <span>
                                       {filteredCards[currentCardIndex].titulo}
                                    </span>

                                    <FiEdit onClick={handleEditCard} />
                                 </div>
                                 <div>
                                    <span>
                                       {
                                          filteredCards[currentCardIndex]
                                             .conteudo
                                       }
                                    </span>
                                 </div>
                              </>
                           )}
                        </div>
                        <div className="icons">
                           <button onClick={goToPreviousCard}>
                              <BiChevronLeft />
                           </button>
                           <button onClick={handleMoveToNextList}>
                              {list === "To Do"
                                 ? "Doing"
                                 : list === "Doing"
                                 ? "Done"
                                 : "Doing"}
                           </button>
                           <BsTrashFill
                              onClick={() =>
                                 handleRemoveCard(
                                    filteredCards[currentCardIndex].id
                                 )
                              }
                           />
                           <button onClick={goToNextCard}>
                              <BiChevronRight />
                           </button>
                        </div>
                     </>
                  ) : (
                     <div>Não há cards.</div>
                  )}
               </>
            )}
         </Container>
      </>
   );
};
