// this will segregate any middleware needed for the application in one place. There can be muddleware for authentication, logging or any other purpose

import { NextFunction, Request, Response } from "express";

// this is where you create a jwt token for the user
// and all that fun stuff lmao
