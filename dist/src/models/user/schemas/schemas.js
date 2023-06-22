"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const registerSchema = joi_1.default.object({
    username: joi_1.default.string().required(),
    email: joi_1.default.string().pattern(emailRegexp).required(),
    password: joi_1.default.string().min(6).required(),
});
const loginSchema = joi_1.default.object({
    email: joi_1.default.string().pattern(emailRegexp).required(),
    password: joi_1.default.string().min(6).required(),
});
exports.userValidationSchema = {
    registerSchema,
    loginSchema,
};
