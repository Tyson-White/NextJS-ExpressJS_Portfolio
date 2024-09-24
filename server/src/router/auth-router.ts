import { Router } from "express";
import { login, register, getMe } from "../controllers/auth-controller";
import { checkAuth } from "../middleware/checkAuth";

const router = Router();

router.post('/login', login)
router.post('/register', register)
router.get('/me', checkAuth, getMe)

export default router