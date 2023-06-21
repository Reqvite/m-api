import express from "express";
import { ctrl } from "../../controllers/user";
import { middlewares } from "../../middlewares";
import { userValidationSchema } from "../../models";

export const router = express.Router();

router.get("/current", middlewares.authenticate, ctrl.currentUser);

router.post(
  "/register",
  middlewares.validateBody(userValidationSchema.registerSchema),
  ctrl.register
);

router.post(
  "/login",
  middlewares.validateBody(userValidationSchema.loginSchema),
  ctrl.login
);
