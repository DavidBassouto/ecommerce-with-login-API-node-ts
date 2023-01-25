import { Router } from "express";
import createProductController from "../controllers/products/createProd.controller";
import { deleteProductByIdController } from "../controllers/products/deleteProductById.controller";
import { listAllProductsController } from "../controllers/products/listAllProducts.controller";
import { listProductByIdController } from "../controllers/products/listProductsById.controller";
import { listProductsFromUserByIdController } from "../controllers/products/listProductsFromUserById";
import { updateProductController } from "../controllers/products/updateProduct.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { validateData } from "../middlewares/validateData.middleware";
import { productCreateSchema } from "../schema/productCreate.schema";

export const routes = Router();

export const productRoutes = () => {
  routes.post(
    "",
    validateData(productCreateSchema),
    ensureAuthMiddleware,
    createProductController
  );
  routes.get("", listAllProductsController);
  routes.get("/:prodID", listProductByIdController);
  routes.delete("/:prodID", ensureAuthMiddleware, deleteProductByIdController);
  routes.patch("/:prodID", ensureAuthMiddleware, updateProductController);

  return routes;
};
