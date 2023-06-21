"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = require("./src/app");
const { DB_HOST, PORT = 3001 } = process.env;
mongoose_1.default.set("strictQuery", true);
mongoose_1.default
    .connect(DB_HOST)
    .then(() => {
    app_1.app.listen(PORT, () => {
        console.log("Database connection successful");
    });
})
    .catch((error) => {
    console.log(error.message);
    process.exit(1);
});
