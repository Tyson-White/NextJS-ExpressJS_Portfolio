import { Request, Response, json } from "express";
import { Post, Prisma } from "@prisma/client";
import { prisma } from "../prisma/prisma-client";

export async function createPost(req: Request<{}, {}, Post>, res: Response) {
    if (req.decodedUserRole === 2) {

        const { title, tags, content, imageUrl, userId, url } = req.body;

        const json = content as Prisma.JsonArray

        try {
            const post = await prisma.post.create({
                data: {
                    title, 
                    content: json,
                    imageUrl,
                    userId: userId,
                    tags,
                    url
                }
            })

            res.json(post)
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        return res.status(403).json({ message: "Нет доступа" })
    }
}

export async function getAllPosts(req: Request<{}, {}, Post>, res: Response) {
    try {
        const posts = await prisma.post.findMany()

        return res.json(posts)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export async function getByUrl(req: Request<{url: string}, {}, {}>, res: Response) {

    const { url } = req.params

    try {
        
        await prisma.post.update({
            where: {
                url
            },
            data: { views: { increment: 1 } }
        })

        const post = await prisma.post.findFirst({
            where: {
                url
            },
        })

        res.json(post)
    } catch (error) {
        return res.status(500).json(error)
    }
}

