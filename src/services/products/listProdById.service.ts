import { validate } from "uuid";
import AppDataSource from "../../data-source";
import Product from "../../entities/products.entity";
import { AppError } from "../../errors/AppError";

export const listProdByIdService = async (prodiD: string) => {
  const prodRepo = AppDataSource.getRepository(Product);

  const verifyIdFormat = validate(prodiD);
  if (!verifyIdFormat) {
    throw new AppError("Incorret ID format provided", 400);
  }

  const productFinded = await prodRepo.findOneBy({
    id: prodiD,
  });
  if (!productFinded) {
    throw new AppError("Product not found", 404);
  }
  return productFinded;
};
