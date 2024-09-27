import { Router } from "express";
import { checkAuth } from "../middleware/checkAuth";
import { createComment, getCommentsByPostId } from "../controllers/comment-controller";


const router = Router();

router.get('/', getCommentsByPostId)
router.post('/create', checkAuth, createComment)

export default router