import bcrypt from "bcrypt";
import { HttpError } from "../../utils";
import jwt from "jsonwebtoken";
import { User } from "../../models";

export const login = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(403, "Email or password invalid");
  }

  if (!(await bcrypt.compare(password, user.password))) {
    throw HttpError(403, "Email or password invalid");
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, process.env.SECRET_KEY!, {
    expiresIn: "23h",
  });

  await User.findByIdAndUpdate(user._id, { token });

  return { token, user };
};
