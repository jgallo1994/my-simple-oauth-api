import { Router } from "express";
import { register, login, validateToken } from "../controllers/authController";
import { authenticateToken } from "../middlewares/authMiddleware";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/validate", authenticateToken, validateToken);

export default router;
