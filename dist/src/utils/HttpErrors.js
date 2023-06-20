"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.HttpError = void 0;
const errorMessageList = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not found",
    409: "Conflict"
};
const HttpError = (status, message = errorMessageList[status]) => {
    const error = new Error(message);
    error.status = status;
    return error;
};
exports.HttpError = HttpError;
const errorHandler = (err, req, res, next) => {
    console.log(err);
    if (err.status) {
        return res
            .status(err.status)
            .json({ status: err.status, message: err.message });
    }
    res.status(500).json({ message: err.message });
};
exports.errorHandler = errorHandler;
