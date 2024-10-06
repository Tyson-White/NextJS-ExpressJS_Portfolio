import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";
import { prisma } from '../prisma/prisma-client';

export async function checkAuth(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.headers.authorization?.split('token=')[1]
        
        if (!token) return res.status(403).json({ message: 'Доступ запрещен' })

        const isBlackListed = await prisma.tokenBlackList.findFirst({
            where: {
                token
            }
        })

        if (isBlackListed) return res.status(403).json("Доступ запрещен") 

        const decoded = jwt.verify(token, `${process.env.SECRET_KEY}`)
        if (!decoded) throw new Error("Доступ запрещен") 

        req.decodedUserId = (<{id: number}>decoded).id
        req.decodedUserRole = (<{role: number}>decoded).role
        res.header({
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        })


    } catch (err) {
        return res.status(403).json(err)
    }
    
    next()
}
// NFbxrwwEtarsw5mYeGAy0tbixszvuDuU