import { Request, Response } from "express";
import { deleteProdByIdService } from "../../services/products/deleteProductById.service";

export const deleteProductByIdController = async (req: Request, res: Response) => {
  const { prodID } = req.params;

  const carDeleted = await deleteProdByIdService(prodID);

  return res.json({ message: "Product deleted with success" });
};
