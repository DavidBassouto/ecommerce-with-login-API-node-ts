import { Express } from "express";
import { loginRoutes } from "./login.routes";
import { productRoutes } from "./products.routes";
import { userRoutes } from "./user.routes";

export const appRoutes = (app: Express) => {
  app.use("/products", productRoutes());
  app.use("/login", loginRoutes());
  app.use("/users", userRoutes());
};
