import { Response } from "express";
import { RequestWithUser } from "../../middlewares/authenticate";
import { User } from "../../models";

export const updateProfileData = async (req:RequestWithUser, res:Response) => {
    const {email } = req.user!
    const data = req.body
   

    const updatedProfileData = await User.findOneAndUpdate({email}, data,  { new: true })

    res.status(200).json({ status: "OK", code: 200, updatedProfileData});
}