import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   padding: 20px;
   align-items: center;
   background-color: #f4f4f4;
   border-radius: 8px;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
   height: 300px;
   width: 150px;

   .edit {
      width: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      width: 100%;
   }

   .title {
      height: 20%;
   }

   .title span {
      display: inline-block;
      margin-right: 8px;
   }

   .title hr {
      width: 100%;
      border: none;
      height: 1px;
      background-color: #ccc;
   }

   .content {
      display: flex;
      height: 80%;
      width: 100%;
      justify-content: center;
      padding-right: 8px; /* Evita que a barra de rolagem cubra o conteúdo */
      overflow-y: auto; /* Adiciona a barra de rolagem vertical */
      word-wrap: break-word; /* Quebra o texto em várias linhas */
   }

   .icons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
   }

   .icons button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
   }

   .icons button:hover {
      background-color: #f2f2f2;
      border-radius: 50%;
   }

   .icons button:focus {
      outline: none;
   }

   .icons svg {
      font-size: 20px;
      color: #555;
   }

   .trash {
      position: relative;
      left: 30px;
      top: 1px;
   }

   .trash svg {
      cursor: pointer;
   }
`;
