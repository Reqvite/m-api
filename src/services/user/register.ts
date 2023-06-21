import bcrypt from "bcrypt";
import { HttpError } from "../../utils";
import { User } from "../../models";

export const register = async (
  username: string,
  email: string,
  password: string
) => {
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email already in use.");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const { username: name, email: mail } = await User.create({
    username,
    email,
    password: hashPassword,
  });

  return { username: name, email: mail };
};
