import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
    sub: string;
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {

    //1 º Receber o token

    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).end();
    }
    //2º pegar apenas o elemento do token, ignorando a palavra "Bearer"
    const [, token] = authToken.split(' ');

    // 3º validar token

    try {

        const { sub } = verify(
            token,
            process.env.SECRET_JWT
        ) as Payload;

        return next();

    } catch (error) {
        return res.status(401).end;
    }

}