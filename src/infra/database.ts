import { Knex } from "knex";

const config: Knex.Config = {
    client: 'pg',
    connection: 'postgres://postgres:postgres@dvdrental-db:5432/dvdrental',
    migrations: {
        directory: "./migrations",
    },
};

export default config;
