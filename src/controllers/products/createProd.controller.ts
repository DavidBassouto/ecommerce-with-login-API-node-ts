import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IProductCreate } from "../../interfaces/products/products.interface";
import { createProdService } from "../../services/products/createProd.service";

export const createProductController = async (req: Request, res: Response) => {
  const { productName, price, description }: IProductCreate = req.body;

  const userID = req.user.id;

  const newProd = await createProdService(userID, {
    productName,
    price,
    description,
  });

  return res
    .status(201)
    .json({ message: "Product created with success", product: instanceToPlain(newProd) });
};

export default createProductController;
