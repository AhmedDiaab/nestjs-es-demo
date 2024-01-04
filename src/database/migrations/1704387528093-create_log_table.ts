import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateLogTable1704387528093 implements MigrationInterface {
    name = 'CreateLogTable1704387528093'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "log" ("id" SERIAL NOT NULL, "message" character varying NOT NULL, CONSTRAINT "PK_350604cbdf991d5930d9e618fbd" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "log"`);
    }

}
