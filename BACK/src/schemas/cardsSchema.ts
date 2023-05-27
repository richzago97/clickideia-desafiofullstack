import { object, Schema, string } from "yup";
export const createCardValidator: Schema = object().shape({
    titulo: string().required("Titulo é obrigatório"),
    conteudo: string().required("Conteúdo é obrigatório"),
    lista: string().required("Lista é obrigatório"),
});

export const updateCardValidator: Schema = object().shape({
    titulo: string(),
    conteudo: string(),
    lista: string(),
});
