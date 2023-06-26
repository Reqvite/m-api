"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../controllers/user");
const middlewares_1 = require("../../middlewares");
const models_1 = require("../../models");
exports.router = express_1.default.Router();
exports.router.post("/register", middlewares_1.middlewares.validateBody(models_1.userValidationSchema.registerSchema), user_1.authController.register);
exports.router.post("/login", middlewares_1.middlewares.validateBody(models_1.userValidationSchema.loginSchema), user_1.authController.login);
exports.router.get("/current", middlewares_1.middlewares.authenticate, user_1.authController.currentUser);
exports.router.post("/logout", middlewares_1.middlewares.authenticate, user_1.authController.logout);
