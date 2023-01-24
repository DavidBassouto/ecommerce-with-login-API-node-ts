import AppDataSource from "../../data-source";
import Product from "../../entities/products.entity";

export const listAllProdsService = async (): Promise<Product[]> => {
  const productRepository = AppDataSource.getRepository(Product);

  const productsList = await productRepository.find();

  return productsList;
};
