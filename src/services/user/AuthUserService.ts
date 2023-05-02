import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken';

interface AuthRequest {
    email: string;
    password: string;
}

class AuthUserService {
    async execute({ email, password }: AuthRequest) {
        const user = await prismaClient.user.findFirst({
            where: {
                email
            },

        })

        if (!user) {
            throw new Error("user/password incorrect!")
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("user/password incorrect!")
        }

        //gerar um token JWT e devolver os dados do usuário como id, name e email.
        const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.SECRET_JWT,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token
        };
    }
}

export { AuthUserService }