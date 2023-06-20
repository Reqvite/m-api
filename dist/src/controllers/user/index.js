"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ctrl = void 0;
const utils_1 = require("../../utils");
const registerController_1 = require("./registerController");
exports.ctrl = {
    register: (0, utils_1.ctrlWrapper)(registerController_1.registerController)
};
