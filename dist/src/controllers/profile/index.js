"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProfileController = void 0;
const getUserProfileController_1 = require("./getUserProfileController");
const utils_1 = require("../../utils");
const updateProfileData_1 = require("./updateProfileData");
exports.userProfileController = {
    getUserProfile: (0, utils_1.ctrlWrapper)(getUserProfileController_1.getUserProfileController),
    updateUserProfile: (0, utils_1.ctrlWrapper)(updateProfileData_1.updateProfileData),
};
