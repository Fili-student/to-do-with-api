import { Router } from "express";
import { postUserController } from "../controller/user.controller.js";

export const UserRouter = Router();

UserRouter.post("/", postUserController);
