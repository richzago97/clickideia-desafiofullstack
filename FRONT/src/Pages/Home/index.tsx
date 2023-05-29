import { useEffect, useState } from "react";
import { Container } from "./style";
import { CardProps } from "../../Interfaces/cards.interface";
import axios from "axios";

const [cards, setCards] = useState<CardProps[]>([]);
const [newCardTitle, setNewCardTitle] = useState("");
const [newCardDescription, setNewCardDescription] = useState("");

useEffect(() => {
    fetchCards();
}, []);

const fetchCards = async () => {
    try {
        const response = await axios.get("/cards");
        setCards(response.data);
    } catch (error) {
        console.log("Error:", error);
    }
};

const handleAddCard = async () => {
    try {
        const response = await axios.post("/cards", {
            title: newCardTitle,
            description: newCardDescription,
            list: "ToDo",
        });
        setCards([...cards, response.data]);
        setNewCardTitle("");
        setNewCardDescription("");
    } catch (error) {
        console.log("Error:", error);
    }
};

export const Home = () => {
    return <Container></Container>;
};
