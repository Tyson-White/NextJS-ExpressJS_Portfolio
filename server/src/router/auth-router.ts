import { Router } from "express";
import { login, register, getMe, logout } from "../controllers/auth-controller";
import { checkAuth } from "../middleware/checkAuth";

const router = Router();

router.post('/login', login)
router.post('/register', register)
router.get('/me', checkAuth, getMe)

// edit on "delete"
router.post('/logout', logout)

export default router