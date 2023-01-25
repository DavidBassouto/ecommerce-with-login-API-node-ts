import AppDataSource from "../../data-source";
import Product from "../../entities/products.entity";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/AppError";

import { IProductCreate } from "../../interfaces/products/products.interface";

export const createProdService = async (
  userID: string,
  { productName, price, description }: IProductCreate
) => {
  const productRepository = AppDataSource.getRepository(Product);
  const userRepository = AppDataSource.getRepository(User);

  const checkIfProductAlreadyExists = await productRepository.findOneBy({
    productName,
    price,
    description,
  });
  if (checkIfProductAlreadyExists) {
    throw new AppError("Product Already Listed", 409);
  }

  const findUser = await userRepository.findOneBy({ id: userID });
  if (!findUser) {
    throw new AppError("User Not Found", 404);
  }

  const product = productRepository.create({
    productName,
    price,
    description,
    user: findUser,
  });

  await productRepository.save(product);

  const productToReturn = {
    ...product,
    created_at: product.created_at.toLocaleString(),
    updated_at: product.updated_at.toLocaleString(),
  };

  return productToReturn;
};
