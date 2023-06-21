import { ctrlWrapper } from "../../utils";
import { registerController } from "./registerController";
import { loginController } from "./loginController";
import { currentUserController } from "./currentUserController";

export const ctrl = {
  register: ctrlWrapper(registerController),
  login: ctrlWrapper(loginController),
  currentUser: ctrlWrapper(currentUserController),
};
