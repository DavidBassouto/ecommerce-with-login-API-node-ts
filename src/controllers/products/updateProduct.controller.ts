import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IProductUpdate } from "../../interfaces/products/products.interface";
import { updateProductService } from "../../services/products/updateProduct.service";

export const updateProductController = async (req: Request, res: Response) => {
  const { prodID } = req.params;

  const { productName, description, price }: IProductUpdate = req.body;
  const editedProd = await updateProductService(
    { productName, description, price },
    prodID,
  );
  return res.status(200).json({
    message: "Product Updated",
    product: instanceToPlain(editedProd),
  });
};
