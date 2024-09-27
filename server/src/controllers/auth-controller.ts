import { Request, Response } from "express";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { LoginForm, RegisterForm } from "../@types/auth-types";
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

        const token = jwt.sign({ id: user.id, role: user.role }, `${process.env.SECRET_KEY}`, { expiresIn: '30d' })

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

        const token = jwt.sign({ id: user.id, role: user.role }, `${process.env.SECRET_KEY}`, { expiresIn: '30d' })

        res.cookie("token", token, {
            httpOnly: true
        })
        
        const { password: pass, ...userData } = user;

        return res.json(userData)
    } catch (err) {
        return res.status(500).json({ message: "Ошибка при регистрации" })
    }
    
}

export async function getMe(req: Request, res: Response) {
    const id = req.decodedUserId;

    const users = await prisma.user.findMany({
        where: { id },
    })

    return res.json(users[0])
}

export async function logout(req: Request, res: Response) {
    try {
        const header = req.headers['cookie']
        if (!header) return res.status(204).json("No content")

        const token: string = header.split('=')[4]

        const checkIfBlacklist = await prisma.tokenBlackList.findFirst({
            where: {
                token
            }
        })

        if (checkIfBlacklist) return res.status(204)

        const newBlackListToken = prisma.tokenBlackList.create({
            data: {
                token,
                userId: req.decodedUserId
            }
        })

        res.setHeader('Clear-Site-Data', '"cookies"');
        res.status(200).json({ message: 'Произведен выход' })

    } catch (error) {
        res.status(500).json({ message: "Ошибка сервера" })
    }
}