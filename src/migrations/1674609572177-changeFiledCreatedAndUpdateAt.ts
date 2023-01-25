import { MigrationInterface, QueryRunner } from "typeorm";

export class changeFiledCreatedAndUpdateAt1674609572177 implements MigrationInterface {
    name = 'changeFiledCreatedAndUpdateAt1674609572177'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "update_at" TO "updated_at"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "brand"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "year"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD "year" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD "brand" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "updated_at" TO "update_at"`);
    }

}
