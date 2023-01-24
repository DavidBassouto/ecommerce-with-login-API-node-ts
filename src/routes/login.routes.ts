import { Router } from "express";
import { sessionController } from "../controllers/session/session.Controller";

import { validateData } from "../middlewares/validateData.middleware";

export const routes = Router();

export const loginRoutes = () => {
  routes.post("", sessionController);

  return routes;
};
