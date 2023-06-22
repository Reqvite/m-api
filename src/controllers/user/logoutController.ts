import { Response } from "express";
import { RequestWithUser } from "../../middlewares/authenticate";
import { User } from "../../models";

export const logoutController = async (req: RequestWithUser, res: Response) => {
  await User.findByIdAndUpdate(req?.user?._id, {
    $set: { token: null },
  });

  res.status(204).json({ status: "Logout success", code: 204 });
};
