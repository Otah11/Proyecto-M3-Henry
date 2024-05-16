import { Request, Response, NextFunction } from 'express';

export const checkUserLogin = (req: Request, res: Response, next: NextFunction) => {
    const userData  = req.body;

    if (  typeof userData.username !== 'string' || typeof userData.password !== 'string') {
        return res.status(400).json({ error: 'Both username and password must be provided as strings' });
    }

    next();
};