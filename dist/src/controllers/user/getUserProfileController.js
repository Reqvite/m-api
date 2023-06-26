"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserProfileController = void 0;
const getUserProfileController = (req, res) => {
    const { email } = req.user;
    console.log(req.user);
};
exports.getUserProfileController = getUserProfileController;
