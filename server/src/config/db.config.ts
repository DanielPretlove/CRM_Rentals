// this folder keeps all the configs such as db.config.ts

import { Pool } from "pg";
import dotenv from 'dotenv';
dotenv.config();

export const pool = new Pool({
  host: String(process.env.HOST),
  port: Number(process.env.DB_PORT),
  user: String(process.env.USER),
  password: String(process.env.PASSWORD),
  database: String(process.env.DATABASE)
});