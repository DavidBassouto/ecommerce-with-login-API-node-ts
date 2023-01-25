import { Router } from "express";
import { sessionController } from "../controllers/session/session.Controller";

import { validateData } from "../middlewares/validateData.middleware";
import { userSessionSchema } from "../schema/userSession.schema";

export const routes = Router();

export const loginRoutes = () => {
  routes.post("", validateData(userSessionSchema), sessionController);

  return routes;
};
