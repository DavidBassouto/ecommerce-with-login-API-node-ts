import { Request, Response } from "express";
import { IProductCreate } from "../../interfaces/products/products.interface";
import { createProdService } from "../../services/products/createProd.service";

export const createProductController = async (req: Request, res: Response) => {
  const { productName, price, description }: IProductCreate = req.body;

  const userID = req.user.id;

  const newCar = await createProdService(userID,{
    productName,
    price,
    description,
  });

  return res
    .status(201)
    .json({ message: "Car created with success", car: newCar });
};

export default createProductController;
