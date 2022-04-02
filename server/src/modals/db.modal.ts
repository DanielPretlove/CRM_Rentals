// this is where you have create your datamodals, so i think creating all of the tables needed and maybe creating the db as well
// this is actually for database table scheme

// tasks to do this week:
// 5: start react Auth setup
// 6: create the whole ui for the login/register and forgot password authentication
// 7: create middleware for authentication

import * as db from '../config/db.config'

export const execute = async (query : any) => {
  try { 
    await db.pool.connect();
    await db.pool.query(query);
  } catch (error) {
    return false;
  } 
}

const query = `CREATE TABLE IF NOT EXISTS "users" (
                "id" SERIAL PRIMARY KEY,
                "email" VARCHAR(100) NOT NULL,
                "username" VARCHAR(100) NOT NULL,
                "password" VARCHAR(100) NOT NULL
                )`;

execute(query).then(result => {
  if (result) {
    console.log("Table has been created")
  }
})