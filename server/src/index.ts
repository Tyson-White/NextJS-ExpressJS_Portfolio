import express from "express";
import { config } from "dotenv";
import cors from "cors"
import path from "path"

import usersRouter from "./router/user-router"
import authRouter from  "./router/auth-router";
import postRouter from "./router/post-router"
import { upload } from "./middleware/upload";

config()

const app = express();

app.use('/uploads', express.static(path.join(__dirname, "uploads")));

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))


app.use('/users', usersRouter)
app.use('/auth', authRouter)
app.use('/posts', postRouter)

app.post('/upload', upload.single('imageUrl'), (req, res, next) => {
    res.json({
        success: true,
        payload: req.files
    })
})

app.listen(process.env.PORT, () => console.log('Running on Port ' + process.env.PORT))