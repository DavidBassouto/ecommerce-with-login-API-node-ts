import { validate } from "uuid";
import AppDataSource from "../../data-source";
import Product from "../../entities/products.entity";
import { AppError } from "../../errors/AppError";

export const deleteProdByIdService = async (
  prodID: string
): Promise<boolean> => {
  const prodRepo = AppDataSource.getRepository(Product);

  const verifyIdFormat = validate(prodID);
  if (!verifyIdFormat) {
    throw new AppError("Incorret ID format provided", 400);
  }

  const findProduct = await prodRepo.findOneBy({ id: prodID });
  if (!findProduct) {
    throw new AppError("Product not found", 404);
  }

  const productDeleted = await prodRepo
    .createQueryBuilder()
    .delete()
    .from(Product)
    .where("id = :id", { id: prodID })
    .execute();

  return true;
};
