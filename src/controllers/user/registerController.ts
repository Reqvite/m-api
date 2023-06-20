import { Request, Response } from "express";
import { register } from "../../services/user";
import { User } from "../../models/userSchema";
import { HttpError } from "../../utils";

export const registerController = async(req:Request, res:Response) => {
    const {username, email , password} = req.body;

    const user = await User.findOne({email})

    if(user){
        throw HttpError(409, "Email already in use.")
    }

    const newUser = await register(username, email , password)

    return res.status(201).json({status: 'Created', code: 201, user: newUser})
}
