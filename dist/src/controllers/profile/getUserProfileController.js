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
exports.getUserProfileController = void 0;
const getUserProfileController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { avatar, email, username, watchingList, willWatch, stoppedWatching, watched } = req.user;
    res.status(200).json({ status: "OK", code: 200, profileData: {
            avatar,
            email,
            username,
            watchingList,
            willWatch,
            stoppedWatching,
            watched
        } });
});
exports.getUserProfileController = getUserProfileController;
