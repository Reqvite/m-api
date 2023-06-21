"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = void 0;
const utils_1 = require("../utils");
const validateBody = (schema) => {
    const func = (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            next((0, utils_1.HttpError)(400, error.message));
        }
        next();
    };
    return func;
};
exports.validateBody = validateBody;
