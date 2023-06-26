import express from "express";
import { middlewares } from "../../middlewares";
import { userProfileController } from "../../controllers/profile";
import { userValidationSchema } from "../../models";


export const router = express.Router();

router.get("/profile", middlewares.authenticate, userProfileController.getUserProfile);
router.put(
    '/update',
    middlewares.validateBody(userValidationSchema.updateUserSchema),
 middlewares.authenticate,
  userProfileController.updateUserProfile)