import { ctrlWrapper } from "../../utils";
import { registerController } from "./registerController";
import { loginController } from "./loginController";
import { currentUserController } from "./currentUserController";
import { logoutController } from "./logoutController";

export const authController = {
  register: ctrlWrapper(registerController),
  login: ctrlWrapper(loginController),
  currentUser: ctrlWrapper(currentUserController),
  logout: ctrlWrapper(logoutController),
};
