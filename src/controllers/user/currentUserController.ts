import { Response } from "express";
import { RequestWithUser } from "../../middlewares/authenticate";

export const currentUserController = (req: RequestWithUser, res: Response) => {
  const { username, email } = req.user!;

  res.status(200).json({ status: "OK", code: 200, user: { username, email } });
};
