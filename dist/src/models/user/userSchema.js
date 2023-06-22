"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
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
exports.User = (0, mongoose_1.model)("User", userSchema);
