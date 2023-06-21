import { Request, Response } from "express";
import { register } from "../../services/user";

export const registerController = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const newUser = await register(username, email, password);

  return res.status(201).json({ status: "Created", code: 201, user: newUser });
};
