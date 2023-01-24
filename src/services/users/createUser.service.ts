import { v4 as uuid } from "uuid";
import { hashSync } from "bcryptjs";
import AppDataSource from "../../data-source";

import { AppError } from "../../errors/AppError";
import { User } from "../../entities/users.entity";
import { IUserCreate } from "../../interfaces/users/user.interface";

export const createUserService = async ({
  name,
  email,
  password,
  cellphone,
  address,
}: IUserCreate): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const emailAlreadyExists = await userRepository.findOneBy({ email });

  if (emailAlreadyExists) {
    throw new AppError("Email already exists", 409);
  }

  const newUser = userRepository.create({
    name,
    email,
    password: hashSync(password, 10),
    cellphone,
    address,
  });

  await userRepository.save(newUser);

  return newUser;
};
