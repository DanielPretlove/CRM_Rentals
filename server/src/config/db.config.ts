// this folder keeps all the configs such as db.config.ts

import { Pool } from "pg";

export const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "Gintama22"
});
