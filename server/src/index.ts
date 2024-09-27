import express from "express";
import { config } from "dotenv";
import cors from "cors"
import path from "path"

import router from "./router/router";

config()

const app = express();

app.use('/uploads', express.static(path.join(__dirname, "uploads")));

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))


app.use('/', router)

app.listen(process.env.PORT, () => console.log('Running on Port ' + process.env.PORT))