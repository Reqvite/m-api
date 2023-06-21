import Joi from "joi";
import { Schema, model } from "mongoose";
import { IUser } from "./types/user";

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema<IUser>(
  {
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
  },
  { versionKey: false, timestamps: true }
);

const registerSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

export const userValidationSchema = {
  registerSchema,
  loginSchema,
};

export const User = model<IUser>("User", userSchema);
