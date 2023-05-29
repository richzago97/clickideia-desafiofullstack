import { ReactNode } from "react";

export interface CardProps {
    id?: string;
    titulo: string;
    conteudo: string;
    lista: string;
    children?: ReactNode;
}
