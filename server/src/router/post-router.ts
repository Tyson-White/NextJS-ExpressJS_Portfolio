import { Router } from "express";
import { checkAuth } from "../middleware/checkAuth";
import { createPost, getAllPosts, getByUrl } from "../controllers/post-controller";

const router = Router();

router.post('/create', checkAuth, createPost)
router.get('/', getAllPosts)
router.get('/:url', getByUrl)

export default router;