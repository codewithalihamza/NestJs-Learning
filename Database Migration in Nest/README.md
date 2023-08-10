4 Migration in Database Nest js

Make a db folder
create file in db folder (data-source.ts)
Pakage.json (add these Script in Script)
{
    "typeorm":"npm run build && npx typeorm -d dist/db/data-source.js",
    "migration:generate":"npm run typeorm -- migration:generate",
    "migration:run":"npm run typeorm -- migration:run",
    "migration:revert":"npm run typeorm -- migration:revert"
}

then now use terminal code to generate  migration
npm run migration:generate -- db/migrations/newMigration
npm run migration:run
