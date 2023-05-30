import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Container } from "./style";
import Button from "../../Button";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CardsContext } from "../../../Contexts/cardContext";
import { CardProps } from "../../../Interfaces/cards.interface";

type CardFormValues = {
   titulo: string;
   conteudo: string;
};

export const CreateCard = () => {
   const { createCard, setCards } = useContext<any>(CardsContext);
   const { register, handleSubmit, reset } = useForm<CardFormValues>();

   const onSubmit = async (data: CardFormValues) => {
      const { titulo, conteudo } = data;

      try {
         const card: CardProps = {
            id: "",
            titulo: titulo,
            conteudo: conteudo,
            lista: "To Do",
         };


         await createCard(card);

         setCards([card]);

         reset();
      } catch (error) {
         console.error("Erro ao criar o card:", error);
      }
   };

   return (
      <Container>
         <h2>Novo</h2>
         <form className="formCard" onSubmit={handleSubmit(onSubmit)}>
            <input
               className="inputCreate"
               placeholder="Título"
               {...register("titulo", { required: true })}
            />
            <textarea
               className="textArea"
               placeholder="Conteúdo"
               {...register("conteudo", { required: true })}
            />

            <Button buttonType="submit">
               <IoIosAddCircleOutline />
            </Button>
         </form>
      </Container>
   );
};
