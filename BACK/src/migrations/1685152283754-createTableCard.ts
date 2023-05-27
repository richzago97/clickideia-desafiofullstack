import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableCard1685152283754 implements MigrationInterface {
    name = 'CreateTableCard1685152283754'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cards" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "titulo" character varying NOT NULL, "conteudo" character varying NOT NULL, "lista" character varying NOT NULL, CONSTRAINT "PK_5f3269634705fdff4a9935860fc" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cards"`);
    }

}
