import express from "express";
import { config } from "dotenv";
import cors from "cors"
import path from "path"

import router from "./router/router";

config()

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ["GET","HEAD","PUT","PATCH","POST","DELETE"],
    preflightContinue: true
}
const app = express();

app.use(cors(corsOptions))

app.use('/uploads', express.static(path.join(__dirname, "uploads")));

app.use(express.json())

app.use('/', router)

app.listen(process.env.PORT, () => console.log('Running on Port ' + process.env.PORT))