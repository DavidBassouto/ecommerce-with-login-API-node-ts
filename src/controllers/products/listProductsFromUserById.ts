import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { listProductsFromUserByIdService } from "../../services/products/listProductsFromUserById.service";

export const listProductsFromUserByIdController = async (
  req: Request,
  res: Response
) => {
  const userID = req.user.id;

  const productsByUser = await listProductsFromUserByIdService(userID);

  return res.json(instanceToPlain(productsByUser));
};
