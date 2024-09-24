import { Request, Response } from "express";
import { prisma } from "../prisma/prisma-client";
import { User } from "@prisma/client";

export async function getUsers(req: Request, res: Response) {
    const users = await prisma.user.findMany()

    return res.json(users);
}

export function getUserById(req: Request, res: Response) {
    const { id } = req.params;

    res.send(`id = ${id}`)
}

export async function createUser(req: Request<{}, {}, User>, res: Response) {
    const { email, password, name } = req.body;

    const user = await prisma.user.create({
        data: {
            email: email,
            password: password,
            name: name
        }
    })

    return res.json(user)
}