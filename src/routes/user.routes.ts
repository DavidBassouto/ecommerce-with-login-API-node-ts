import { Router } from "express";
import { createUserController } from "../controllers/users/createUser.controller";

import { validateData } from "../middlewares/validateData.middleware";
import { userCreateSchema } from "../schema/userCreate.schema";

export const routes = Router();

export const userRoutes = () => {
  routes.post("", validateData(userCreateSchema), createUserController);
  return routes;
};
