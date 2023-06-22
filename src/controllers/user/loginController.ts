import { Request, Response } from "express";
import { login } from "../../services/user";

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const { token, user } = await login(email, password);

  res.status(200).json({
    status: "OK",
    code: 200,
    token,
    user: {
      username: user.username,
      email: user.email,
    },
  });
};
