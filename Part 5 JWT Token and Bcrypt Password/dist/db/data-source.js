"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceOptions = void 0;
const typeorm_1 = require("typeorm");
exports.dataSourceOptions = {
    "type": 'postgres',
    "host": 'localhost',
    "port": 5432,
    "username": 'postgres',
    "password": '112233',
    "database": 'postgres',
    "entities": ["dist/**/*.entity{.ts,.js}"],
    "migrations": ["dist/db/migrations/*.js"]
};
const dataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
exports.default = dataSource;
//# sourceMappingURL=data-source.js.map