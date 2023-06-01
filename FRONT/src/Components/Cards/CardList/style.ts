import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   padding: 20px;
   align-items: center;
   background-color: #f4f4f4;
   border-radius: 8px;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
   height: 320px;
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

   .inputEdit {
      margin-bottom: 10px;
      padding: 4px;
      width: 100%;
   }

   .textAreaEdit {
      margin-bottom: 10px;
      padding: 4px;
      width: 100%;
      height: 150px;
   }

   .iconsEdit {
      display: flex;
      justify-content: space-between;
   }

   .buttonEdit {
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: #fff;
      border: 1px solid #555;
      margin-right: 8px;
   }

   .buttonEdit:hover {
      background-color: #f2f2f2;
   }

   .buttonEdit:focus {
      outline: none;
   }

   .buttonEdit svg {
      font-size: 14px;
      color: #555;
   }

   .buttonCancel {
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: #fff;
      border: 1px solid #555;
   }

   .buttonCancel:hover {
      background-color: #f2f2f2;
   }

   .buttonCancel:focus {
      outline: none;
   }

   .buttonCancel svg {
      font-size: 14px;
      color: #555;
   }

   .content {
      display: flex;
      height: 80%;
      width: 100%;
      justify-content: center;
      padding-right: 8px; 
      overflow-y: auto; 
      word-wrap: break-word; 
   }

   .icons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      width: 95px;
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
      right: 60px;
      top: 40px;
   }

   .trash svg {
      cursor: pointer;
      height: 18px;
   }

   h2 {
      font-family: "Great Vibes", cursive;
   }
`;
