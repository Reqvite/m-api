"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentUserController = void 0;
const currentUserController = (req, res) => {
    const { username, email } = req.user;
    res.status(200).json({ status: "OK", code: 200, user: { username, email } });
};
exports.currentUserController = currentUserController;
