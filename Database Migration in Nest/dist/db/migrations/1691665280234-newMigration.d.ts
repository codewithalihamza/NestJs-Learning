import { MigrationInterface, QueryRunner } from "typeorm";
export declare class NewMigration1691665280234 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
