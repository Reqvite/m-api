import { Schema, model } from "mongoose";

interface User {
    username: string;
    email: string;
    password: string;
    avatar?: string;
    token: string | null;
    watchingList?: [];
    willWatch?: [];
    stoppedWatching?: [];
    watched?: [];
  }
  
  const userSchema = new Schema<User>({
    username: { type: String, required: true },
    password: {type: String, required: true},
    email: { type: String, required: true },
    token: {
        type: String,
        default: null,
      },
    avatar: String,
    watchingList: {type: Array, default: []},
    willWatch: {type: Array, default: []},
    stoppedWatching: {type: Array, default: []},
    watched: {type: Array, default: []},
    
  },{versionKey: false, timestamps: true});

  export const User = model<User>('User', userSchema);