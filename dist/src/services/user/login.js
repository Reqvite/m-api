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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const utils_1 = require("../../utils");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const models_1 = require("../../models");
const login = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield models_1.User.findOne({ email });
    if (!user) {
        throw (0, utils_1.HttpError)(403, "Email or password invalid");
    }
    if (!(yield bcrypt_1.default.compare(password, user.password))) {
        throw (0, utils_1.HttpError)(403, "Email or password invalid");
    }
    const payload = {
        id: user._id,
    };
    const token = jsonwebtoken_1.default.sign(payload, process.env.SECRET_KEY, {
        expiresIn: "23h",
    });
    yield models_1.User.findByIdAndUpdate(user._id, { token });
    return { token, user };
});
exports.login = login;
