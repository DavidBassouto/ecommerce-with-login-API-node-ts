import { validate } from "uuid";
import AppDataSource from "../../data-source";
import Product from "../../entities/products.entity";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/AppError";
import { IProductUpdate } from "../../interfaces/products/products.interface";

export const updateProductService = async (
  { productName, description, price }: IProductUpdate,
  prodID: string,
  userID: string
) => {
  const verifyIdFormat = validate(prodID);
  if (!verifyIdFormat) {
    throw new AppError("Incorret ID format provided", 400);
  }

  const prodRepo = AppDataSource.getRepository(Product);
  const userRepo = AppDataSource.getRepository(User);

  const findProduct = await prodRepo.findOneBy({
    id: prodID,
  });

  if (!findProduct) {
    throw new AppError("Product not found", 404);
  }
  await prodRepo
    .createQueryBuilder()
    .update(Product)
    .set({
      productName: productName ? productName : findProduct.productName,
      description: description ? description : findProduct.description,
      price: price ? price : findProduct.price,
    })
    .where("id = :id", { id: prodID })
    .execute();

  const prodEdited = await prodRepo.findOneBy({
    id: prodID,
  });

  return prodEdited;
};
