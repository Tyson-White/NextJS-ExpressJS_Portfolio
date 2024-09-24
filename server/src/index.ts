import express from "express";
import usersRouter from "./router/user-router"
import authRouter from  "./router/auth-router";
import { config } from "dotenv";
import cors from "cors"

config()

const app = express();

app.use(express.json())
app.use(cors({
    origin: 'http:///localhost:3000',
    credentials: true
}))

app.use('/users', usersRouter)
app.use('/auth', authRouter)


app.listen(process.env.PORT, () => console.log('Running on Port ' + process.env.PORT))