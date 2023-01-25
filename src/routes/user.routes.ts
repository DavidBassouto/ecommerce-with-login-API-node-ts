import { Router } from "express";
import { listProductsFromUserByIdController } from "../controllers/products/listProductsFromUserById";
import { createUserController } from "../controllers/users/createUser.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";

import { validateData } from "../middlewares/validateData.middleware";
import { userCreateSchema } from "../schema/userCreate.schema";

export const routes = Router();

export const userRoutes = () => {
  routes.post("", validateData(userCreateSchema), createUserController);
  routes.get("/products",ensureAuthMiddleware, listProductsFromUserByIdController);
  return routes;
};
