import React from "react";
import { CardsProvider } from "../../Contexts/cardContext";
import { CreateCard } from "./Create";
import { DoingCard } from "./Doing";
import { DoneCard } from "./Done";
import { Container } from "./style";
import { ToDoCard } from "./To Do";

export const Cards = () => {
    return (
        <CardsProvider>
            <Container>
                <CreateCard />
                <ToDoCard />
                <DoingCard />
                <DoneCard />
            </Container>
        </CardsProvider>
    );
};
