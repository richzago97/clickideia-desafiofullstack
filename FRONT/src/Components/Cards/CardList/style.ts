import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-items: center;
    background-color: #f4f4f4; /* Cor de fundo */
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra */
    min-width: 150px;
    max-width: 150px;

    .edit > svg {
        margin-left: 10px;
    }

    .icons {
        position: relative;
        top: 100px;
    }
`;
