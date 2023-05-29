import styled from "styled-components";

export const StyledButton = styled.button`
    padding: 10px 20px;
    background-color: rgb(0, 123, 255);
    color: rgb(255, 255, 255);
    border: none;
    border-radius: 4px;
    margin-top: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease 0s;
    width: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
        background-color: #0056b3;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.3);
    }
`;
