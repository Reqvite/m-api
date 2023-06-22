import express from "express";
import { authController } from "../../controllers/user";
import { middlewares } from "../../middlewares";
import { userValidationSchema } from "../../models";

export const router = express.Router();

router.get("/current", middlewares.authenticate, authController.currentUser);

router.post(
  "/register",
  middlewares.validateBody(userValidationSchema.registerSchema),
  authController.register
);

router.post(
  "/login",
  middlewares.validateBody(userValidationSchema.loginSchema),
  authController.login
);

router.post("/logout", middlewares.authenticate, authController.logout);
