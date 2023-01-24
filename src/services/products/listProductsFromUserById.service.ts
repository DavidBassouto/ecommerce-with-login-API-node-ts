import { validate } from "uuid";
import AppDataSource from "../../data-source";
import Product from "../../entities/products.entity";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/AppError";

export const listProductsFromUserByIdService = async (
  userID: string
): Promise<Product[]> => {
  const productRepo = AppDataSource.getRepository(Product);
  const userRepo = AppDataSource.getRepository(User);

  const verifyIdFormat = validate(userID);
  if (!verifyIdFormat) {
    throw new AppError("Incorret ID format provided", 400);
  }

  const findUser = await userRepo.findOneBy({
    id: userID,
  });
  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  const findProductsFromUser = await productRepo.find({
    where: {
      user: findUser,
    },
  });

  return findProductsFromUser;
};
