

import { Router } from 'express';
import * as userRoute from '../controllers/auth.controllers';

var routes = Router();
routes.get('/users', userRoute.getUsers);
routes.get('/users/:id', userRoute.getUserById);
routes.post('/register', userRoute.addUser);
routes.put('/forgotpassword', userRoute.updateUserDetails)

export default routes;