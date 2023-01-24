import AppDataSource from "../../data-source";

import { AppError } from "../../errors/AppError";

import { compare } from "bcryptjs";
import Jwt from "jsonwebtoken";
import "dotenv/config";
import { User } from "../../entities/users.entity";
import { IUserLogin } from "../../interfaces/users/user.interface";

export const sessionService = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({
    email: email,
  });

  if (!user) {
    throw new AppError("Invalid credentials", 403);
  }

  const matchPassword = await compare(password, user.password);
  if (!matchPassword) {
    throw new AppError("Invalid credentials", 403);
  }

  const token = Jwt.sign(
    { id: user.id },
    process.env.SECRET_KEY as string,
    {
      subject: user.id,
      expiresIn: "2h",
    }
  );

  return token;
};
