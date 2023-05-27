import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cards")
export class Card {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    titulo: string;

    @Column()
    conteudo: string;

    @Column()
    lista: string;
}
