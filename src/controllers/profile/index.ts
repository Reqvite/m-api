import { getUserProfileController } from "./getUserProfileController";
import { ctrlWrapper } from "../../utils";
import { updateProfileData } from "./updateProfileData";

export const userProfileController = {
    getUserProfile: ctrlWrapper(getUserProfileController),
    updateUserProfile: ctrlWrapper(updateProfileData),
}