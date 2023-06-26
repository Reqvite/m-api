"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("../../middlewares");
const profile_1 = require("../../controllers/profile");
const models_1 = require("../../models");
exports.router = express_1.default.Router();
exports.router.get("/profile", middlewares_1.middlewares.authenticate, profile_1.userProfileController.getUserProfile);
exports.router.put('/update', middlewares_1.middlewares.validateBody(models_1.userValidationSchema.updateUserSchema), middlewares_1.middlewares.authenticate, profile_1.userProfileController.updateUserProfile);
