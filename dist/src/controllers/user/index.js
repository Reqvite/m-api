"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ctrl = void 0;
const utils_1 = require("../../utils");
const registerController_1 = require("./registerController");
const loginController_1 = require("./loginController");
const currentUserController_1 = require("./currentUserController");
exports.ctrl = {
    register: (0, utils_1.ctrlWrapper)(registerController_1.registerController),
    login: (0, utils_1.ctrlWrapper)(loginController_1.loginController),
    currentUser: (0, utils_1.ctrlWrapper)(currentUserController_1.currentUserController),
};
