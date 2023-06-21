"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.userValidationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const mongoose_1 = require("mongoose");
const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const userSchema = new mongoose_1.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    token: {
        type: String,
        default: null,
    },
    avatar: String,
    watchingList: { type: Array, default: [] },
    willWatch: { type: Array, default: [] },
    stoppedWatching: { type: Array, default: [] },
    watched: { type: Array, default: [] },
}, { versionKey: false, timestamps: true });
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
exports.User = (0, mongoose_1.model)("User", userSchema);
