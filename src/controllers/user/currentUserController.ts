import { Response } from "express";
import { RequestWithUser } from "../../shared/types/reqWithUser";

export const currentUserController = (req: RequestWithUser, res: Response) => {
  console.log(1);
};
