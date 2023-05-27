import { object, Schema, string } from "yup";
export const createCardValidator: Schema = object().shape({
    titulo: string().required("Titulo é obrigatório"),
    conteudo: string().required("Conteúdo é obrigatório"),
    lista: string().required("Lista é obrigatório"),
});
