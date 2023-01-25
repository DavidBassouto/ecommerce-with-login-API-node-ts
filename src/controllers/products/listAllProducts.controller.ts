import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { listAllProdsService } from "../../services/products/listAllProducts.service";

export const listAllProductsController = async (
  req: Request,
  res: Response
) => {
  const prodList = await listAllProdsService();
  return res.status(200).json(instanceToPlain(prodList));
};
