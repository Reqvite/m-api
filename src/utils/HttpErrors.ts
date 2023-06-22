import { NextFunction, Request, Response } from "express";

type ErrorMessageListType = Record<number, string>;

const errorMessageList: ErrorMessageListType = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not found",
  409: "Conflict",
};

interface ErrorWithStatus extends Error {
  status: number;
}

export const HttpError = (
  status: number,
  message = errorMessageList[status]
) => {
  const error = new Error(message) as ErrorWithStatus;
  error.status = status;
  return error;
};

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);
  if (err.status) {
    return res
      .status(err.status)
      .json({ status: err.status, message: err.message });
  }
  res.status(500).json({ message: err.message });
};
