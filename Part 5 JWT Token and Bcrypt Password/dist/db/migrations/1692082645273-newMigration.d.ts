import { MigrationInterface, QueryRunner } from "typeorm";
export declare class NewMigration1692082645273 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
