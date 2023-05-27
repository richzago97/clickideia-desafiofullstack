import "dotenv/config";
import path from "path";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";

const dataSourceConfig = (): DataSourceOptions => {
    const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
    const migrationPath: string = path.join(
        __dirname,
        "./migrations/**.{ts,js}"
    );

    const dbUrl: string | undefined = process.env.DATABASE_URL;

    if (!dbUrl) throw new Error("Missing env var: 'DATABASE_URL'");

    return {
        type: "postgres",
        url: dbUrl,
        synchronize: false,
        logging: true,
        entities: [entitiesPath],
        migrations: [migrationPath],
    };
};

// export const AppDataSource = new DataSource({
//     type: "postgres",
//     host: process.env.POSTGRES_HOST,
//     port: 5432,
//     username: process.env.POSTGRES_USER,
//     password: process.env.POSTGRES_PASSWORD,
//     database: process.env.POSTGRES_DB_NAME,
//     logging: true,
//     synchronize: false,
//     entities: [Card],
//     migrations: ["initialMigration1685140942709"],
// });

export const AppDataSource = new DataSource(dataSourceConfig());
