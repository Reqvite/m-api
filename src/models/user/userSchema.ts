import { Schema, model } from "mongoose";
import { IUser } from "./types/user";

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

export const User = model<IUser>("User", userSchema);
