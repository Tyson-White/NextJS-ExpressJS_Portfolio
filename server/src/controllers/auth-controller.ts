import { Request, Response } from "express";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { LoginForm, RegisterForm } from "../types/auth-types";
import { prisma } from "../prisma/prisma-client";
import { config } from "dotenv";

config()

export async function login(req: Request<{}, {}, LoginForm>, res: Response) {
    const { email, password } = req.body;

    try {
        const user = await prisma.user.findFirst({
            where: { email }
        })

        if (!user) {
            return res.status(403).json({ message: "Неверный логин или пароль" })
        }

        const passwordIsValid = await bcrypt.compare(password, user.password)

        if (!passwordIsValid) {
            return res.status(403).json({ message: "Неверный логин или пароль" })
        }

        const token = jwt.sign({ id: user.id }, `${process.env.SECRET_KEY}`, { expiresIn: '1h' })

        res.cookie("token", token, {
            httpOnly: true
        })

        res.json(user)
    } catch (err) {
        return res.status(500).json({ message: "Ошибка авторизации" })
    }
    
}

export async function register(req: Request<{}, {}, RegisterForm>, res: Response) {
    const { email, password, name } = req.body;


    try {
        const salt = await bcrypt.genSalt(10)
        const passwordHash = await bcrypt.hash(password, salt)

        const user = await prisma.user.create({
            data: {
                email,
                password: passwordHash,
                name
            }
        })

        const token = jwt.sign({ id: user.id }, `${process.env.SECRET_KEY}`, { expiresIn: '1h' })

        res.cookie("token", token, {
            httpOnly: true
        })
        
        const { password: pass, ...userData } = user;

        return res.json(userData)
    } catch (err) {
        return res.status(500).json({ message: "Ошибка при регистрации" })
    }
    
}