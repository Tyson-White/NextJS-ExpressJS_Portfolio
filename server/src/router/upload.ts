import { Router } from "express"
import { upload } from "../middleware/upload"

const router = Router()

router.post('/', upload.single('imageUrl'), (req, res, next) => {
    res.json({
        success: true,
        payload: req.files
    })
})

export default router