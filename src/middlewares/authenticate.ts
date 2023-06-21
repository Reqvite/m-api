import { NextFunction, Request, Response } from "express";
import { HttpError } from "../utils";
import jwt, { JwtPayload } from "jsonwebtoken";
import { IUser, User } from "../models";
import { RequestWithUser } from "../shared/types/reqWithUser";

export const authenticate = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") {
    next(HttpError(401));
  }

  try {
    const { id } = jwt.verify(token, process.env.SECRET_KEY!) as JwtPayload;
    const user = (await User.findById(id)) as IUser;
    if (!user || !user.token || token !== user.token) {
      next(HttpError(401));
    }
    req.user = user;
    next();
  } catch {
    next(HttpError(401));
  }
};
