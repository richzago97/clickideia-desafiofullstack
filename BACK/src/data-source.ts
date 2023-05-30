import { DataSource } from "typeorm";
import "dotenv/config";

export const AppDataSource = new DataSource({
   type: "postgres",
   host: process.env.POSTGRES_HOST!,
   port: Number(process.env.PGPORT!),
   username: process.env.POSTGRES_USER!,
   password: process.env.POSTGRES_PASSWORD!,
   database: process.env.POSTGRES_DB!,
   logging: true,
   synchronize: false,
   entities: ["src/entities/*.ts"],
   migrations: ["src/migrations/*.ts"],
});
