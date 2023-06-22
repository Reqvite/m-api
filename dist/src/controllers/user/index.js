"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const utils_1 = require("../../utils");
const registerController_1 = require("./registerController");
const loginController_1 = require("./loginController");
const currentUserController_1 = require("./currentUserController");
const logoutController_1 = require("./logoutController");
exports.authController = {
    register: (0, utils_1.ctrlWrapper)(registerController_1.registerController),
    login: (0, utils_1.ctrlWrapper)(loginController_1.loginController),
    currentUser: (0, utils_1.ctrlWrapper)(currentUserController_1.currentUserController),
    logout: (0, utils_1.ctrlWrapper)(logoutController_1.logoutController),
};
