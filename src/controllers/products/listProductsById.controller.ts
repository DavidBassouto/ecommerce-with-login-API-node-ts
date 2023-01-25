import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { listProdByIdService } from "../../services/products/listProdById.service";

export const listProductByIdController = async (
  req: Request,
  res: Response
) => {
  const { prodID } = req.params;

  const productFind = await listProdByIdService(prodID);

  return res.json(instanceToPlain(productFind));
};
