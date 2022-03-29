import express, { Application, Request, Response, NextFunction } from 'express';
import * as PostgresConnector from './config/db.config';
import * as userRoute from './controllers/auth.controllers';
const app: Application = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/users', userRoute.getUsers);
app.get('/users/:id', userRoute.getUserById);
app.post('/register', userRoute.addUser);
app.put('/forgotpassword', userRoute.updateUserDetails)
app.listen(port);