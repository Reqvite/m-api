"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerController = void 0;
const user_1 = require("../../services/user");
const userSchema_1 = require("../../models/userSchema");
const utils_1 = require("../../utils");
const registerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    const user = yield userSchema_1.User.findOne({ email });
    if (user) {
        throw (0, utils_1.HttpError)(409, "Email already in use.");
    }
    const newUser = yield (0, user_1.register)(username, email, password);
    return res.status(201).json({ status: 'Created', code: 201, user: newUser });
});
exports.registerController = registerController;
