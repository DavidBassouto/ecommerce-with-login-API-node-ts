import { Request, Response } from "express";
import { IUserLogin } from "../../interfaces/users/user.interface";
import { sessionService } from "../../services/sessions/session.service";


export const sessionController = async (req: Request, res: Response) => {
  const { email, password }: IUserLogin = req.body;

  const session = await sessionService({ email, password });

  return res.status(200).json({
    token:session
  });
};
