import { Router } from "express";

import userRouter from "./user-router"
import postRouter from "./post-router"
import authRouter from "./auth-router"
import commentRouter from "./comment-router"
import upload from "./upload";

const router = Router();

router.use('/users', userRouter)
router.use('/posts', postRouter)
router.use('/auth', authRouter)
router.use('/comments', commentRouter)
router.use('/upload', upload)

export default router