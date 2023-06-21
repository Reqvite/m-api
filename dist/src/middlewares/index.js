"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middlewares = void 0;
const validateBody_1 = require("./validateBody");
const authenticate_1 = require("./authenticate");
exports.middlewares = {
    validateBody: validateBody_1.validateBody,
    authenticate: authenticate_1.authenticate,
};
