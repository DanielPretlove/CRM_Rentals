// this folder keeps all the configs such as db.config.ts

import { Client } from "pg";
import dotenv from 'dotenv';
dotenv.config();

export const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "Gintama22",
  database: "AnimeRentals"
});

const execute = async (query : any) => {
  try { 
    await client.connect();
    await client.query(query);
  } catch (error) {
    console.log(error);
    return false;
  } finally {
  }

}

const query = `CREATE TABLE IF NOT EXISTS "users" (
                "id" SERIAL,
                "email" VARCHAR(100) NOT NULL,
                "username" VARCHAR(100) NOT NULL,
                "password" VARCHAR(100) NOT NULL,
                PRIMARY KEY("id")
                )`;

execute(query).then(result => {
  if (result) {
    console.log("Table has been created")
  }
})