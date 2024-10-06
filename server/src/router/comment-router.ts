import { Router } from "express";
import { checkAuth } from "../middleware/checkAuth";
import { createComment, deleteComment, getCommentsByPostId } from "../controllers/comment-controller";


const router = Router();

router.get('/', getCommentsByPostId)
router.post('/create', checkAuth, createComment)
router.delete('/delete/:id', checkAuth, deleteComment)

export default router