"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewMigration1692082645273 = void 0;
class NewMigration1692082645273 {
    constructor() {
        this.name = 'NewMigration1692082645273';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "register" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_14473cc8f2caa81fd19f7648d54" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "register"`);
    }
}
exports.NewMigration1692082645273 = NewMigration1692082645273;
//# sourceMappingURL=1692082645273-newMigration.js.map