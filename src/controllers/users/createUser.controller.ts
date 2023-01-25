import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";

import { IUserCreate } from "../../interfaces/users/user.interface";
import { createUserService } from "../../services/users/createUser.service";

export const createUserController = async (req: Request, res: Response) => {
  const { name, email, password, cellphone, address }: IUserCreate = req.body;

  const newUser = await createUserService({
    name,
    email,
    password,
    cellphone,
    address,
  });

  return res.status(201).json({
    message: "User created with success",
    user: instanceToPlain(newUser),
  });
};
