import express from "express";
import {
  register,
  profile,
  confirm,
  authenticate,
  forgotPassword,
  checkPassword,
  newPassword,
} from "../controllers/VetController.js";
import checkAuth from "../middleware/authMiddleware.js";

const router = express.Router();

//Public Area
router.post("/register", register);
router.get("/confirm/:token", confirm);
router.post("/login", authenticate);

router.post("/forgot-pass/", forgotPassword);
router.route("/forgot-pass/:token").get(checkPassword).post(newPassword);

//Private Area
router.get("/profile", checkAuth, profile);

export default router;
