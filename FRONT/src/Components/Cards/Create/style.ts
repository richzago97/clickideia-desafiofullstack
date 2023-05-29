import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-items: center;
    background-color: #f4f4f4; /* Cor de fundo */
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra */

    h2 {
        margin-bottom: 10px;
    }

    .formCard {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
    }

    .inputCreate {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        outline: none;

        ::placeholder {
            color: #999;
        }
    }

    .textArea {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        outline: none;
        resize: vertical;

        ::placeholder {
            color: #999;
        }
    }
`;