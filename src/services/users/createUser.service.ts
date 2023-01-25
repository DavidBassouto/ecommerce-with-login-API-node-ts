import { v4 as uuid } from "uuid";
import { hashSync } from "bcryptjs";
import AppDataSource from "../../data-source";

import { AppError } from "../../errors/AppError";
import { User } from "../../entities/users.entity";
import {
  IUserCreate,
  IUserCreateResponse,
} from "../../interfaces/users/user.interface";

export const createUserService = async ({
  name,
  email,
  password,
  cellphone,
  address,
}: IUserCreate) => {
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

  const userToReturn = {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
    cellphone: newUser.cellphone,
    address: newUser.address,
    created_at: newUser.created_at.toLocaleString(),
    updated_at: newUser.created_at.toLocaleString(),
  };

  return userToReturn;
};
