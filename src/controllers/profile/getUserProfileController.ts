import { Response } from "express";
import { RequestWithUser } from "../../middlewares/authenticate";

export const getUserProfileController = async (req:RequestWithUser, res:Response) => {
    const {avatar, email , username, watchingList, willWatch, stoppedWatching, watched} = req.user!;

    res.status(200).json({ status: "OK", code: 200, profileData: { 
        avatar,
        email, 
        username, 
        watchingList, 
        willWatch, 
        stoppedWatching, 
        watched
    } });
}