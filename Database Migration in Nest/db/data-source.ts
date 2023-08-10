// Terminal Code to Run and generate migration

// npm run migration:generate -- db/migrations/newMigration
//npm run migration:run

import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions:DataSourceOptions={
    "type": 'postgres',
    "host": 'localhost',
    "port": 5432,
    "username": 'postgres',
    "password": '112233',
    "database": 'postgres',
//    "synchronize": false,
    "entities": ["dist/**/*.entity{.ts,.js}"],
    "migrations": ["dist/db/migrations/*.js"]
}

const dataSource=new DataSource(dataSourceOptions)
export default dataSource