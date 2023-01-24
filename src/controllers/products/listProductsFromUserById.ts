import { Request, Response } from "express";
import { listProductsFromUserByIdService } from "../../services/products/listProductsFromUserById.service";

export const listProductsFromUserByIdController = async (
  req: Request,
  res: Response
) => {
  const { userID } = req.params;

  const carsFind = await listProductsFromUserByIdService(userID);

  return res.json(carsFind);
};
