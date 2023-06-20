import { NextFunction } from "express";

const handleMongooseError = (error:any, data:any, next:NextFunction) => {
    const {name, code} = error;
    const status = (name === "MongoServerError" && code === 11000) ? 409 : 400;
    error.status = status;
    next()
};

module.exports = handleMongooseError;