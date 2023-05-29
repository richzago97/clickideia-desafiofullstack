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
    const { addCard, setCards } = useContext<any>(CardsContext);
    const { register, handleSubmit, reset } = useForm<CardFormValues>();

    const onSubmit = async (data: CardFormValues) => {
        const { titulo, conteudo } = data;

        try {
            // Criar um objeto CardProps com as propriedades necessárias
            const card: CardProps = {
                id: "", // O valor do id será gerado pelo backend
                titulo: titulo,
                conteudo: conteudo,
                lista: "To Do", // Definir a lista como "To Do"
            };

            // Chamar a função addCard do contexto passando o objeto card
            await addCard(card);

            // Atualizar os cards no contexto com o novo card adicionado
            // setCards((cards: any) => [...cards, card]);
            setCards([card]);

            // Limpar o formulário após adicionar o card
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
