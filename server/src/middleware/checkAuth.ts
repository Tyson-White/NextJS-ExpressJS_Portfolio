import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";

export async function checkAuth(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.headers.cookie?.split(';')[3].slice(7) || ''
        const decoded = jwt.verify(token, `${process.env.SECRET_KEY}`)
        if (!decoded) throw new Error("Доступ запрещен") 

        req.body.decodedUserId = (<{id: number}>decoded).id
    } catch (err) {
        return res.status(403).json(err)
    }
    
    next()
}
// NFbxrwwEtarsw5mYeGAy0tbixszvuDuU