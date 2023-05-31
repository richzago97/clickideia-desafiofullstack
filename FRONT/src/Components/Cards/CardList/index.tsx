import React, { useContext, useState } from "react";
import { Container } from "./style";
import { BsTrashFill } from "react-icons/bs";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { AiOutlineSave, AiOutlineClose } from "react-icons/ai";
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

   const handleCancel = () => {
      setEditMode(false);
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
                              <div className="editContainer">
                                 <input
                                    className="inputEdit"
                                    type="text"
                                    value={editedCardTitle}
                                    onChange={(e) =>
                                       setEditedCardTitle(e.target.value)
                                    }
                                 />
                                 <textarea
                                    className="textAreaEdit"
                                    value={editedCardContent}
                                    onChange={(e) =>
                                       setEditedCardContent(e.target.value)
                                    }
                                 />

                                 <div className="iconsEdit">
                                    <button
                                       className="buttonEdit"
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
                                       <AiOutlineSave />
                                    </button>

                                    <button
                                       className="buttonCancel"
                                       onClick={handleCancel}
                                    >
                                       <AiOutlineClose />
                                    </button>
                                 </div>
                              </div>
                           ) : (
                              <>
                                 <div className="title">
                                    <span>
                                       {filteredCards[currentCardIndex].titulo}
                                    </span>
                                    <FiEdit onClick={handleEditCard} />
                                    <hr></hr>
                                 </div>
                                 <div className="content">
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

                           <button onClick={goToNextCard}>
                              <BiChevronRight />
                           </button>

                           <div className="trash">
                              <BsTrashFill
                                 onClick={() =>
                                    handleRemoveCard(
                                       filteredCards[currentCardIndex].id
                                    )
                                 }
                              />
                           </div>
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
