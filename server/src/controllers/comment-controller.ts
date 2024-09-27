import { Request, Response } from "express";
import { prisma } from "../prisma/prisma-client";
import { Comment } from "@prisma/client";

export async function getCommentsByPostId(req: Request, res: Response) {
    try {
        const { postId } = req.query

        if (postId) {
            const comments = await prisma.comment.findMany({
                where: {
                    postId: 1
                },
                include: {
                    user: true
                }
            })
            res.json(comments)
        } else {
            const comments = await prisma.comment.findMany()
            res.json(comments)
        }
        
        

    } catch (error) {
        res.status(500).json(error)
    }
    
}

export async function createComment(req: Request<{}, {}, Comment>, res: Response) {
    const { message, postId } = req.body;

    try {
        const comment = await prisma.comment.create({
            data: {
                message,
                postId,
                userId: req.decodedUserId
            }
        })

        res.json(comment)
    } catch (error) {
        res.status(500).json(error)
    }
}