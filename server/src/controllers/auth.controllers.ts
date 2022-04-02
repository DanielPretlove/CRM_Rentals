// this is where you house all of the controllers needed for the application, these controller methods
// get the request from the routes and convert them to HTTP responses with the use of any middleware as neccary

import * as db from "../config/db.config";
import express, { Application, Request, Response, NextFunction } from 'express';


export const getUsers = async (request: Request, response: Response, next: NextFunction) => {
  db.pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  })
}
export const getUserById = async (request: Request, response: Response, next: NextFunction) => {
  const id = request.params.id;
  db.pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  })
}

export const addUser = (request: Request, response: Response) => {
  const email = request.body.email;
  const username = request.body.username;
  const password = request.body.password;

  db.pool.query("INSERT INTO users (id, email, username, password) VALUES (DEFAULT, $1, $2, $3)", [email, username, password], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  })
}

export const updateUserDetails = (request: Request, response: Response) => {
  const username = request.body.username;
  const password = request.body.password;

  db.pool.query("UPDATE users SET username = $1, password = $2", [username, password], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  })
}
