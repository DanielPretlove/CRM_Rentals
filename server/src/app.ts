import express, { Router, Application, Request, Response, NextFunction } from 'express';
import * as PostgresConnector from './modals/db.modal';
import dotenv from 'dotenv';
import routes from './routes/auth.routes';
dotenv.config();

const app: Application = express();
const port = 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(routes);
app.use(PostgresConnector.execute);
app.listen(port);

