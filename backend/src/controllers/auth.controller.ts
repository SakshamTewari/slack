import { FastifyReply, FastifyRequest } from "fastify";
import { AuthService } from "../services/auth.service";
import { RegisterRequest } from "../types/auth";

export class AuthController {
    constructor(private readonly authService: AuthService){}

    // register
    async register(request: FastifyRequest<{Body: RegisterRequest}>, reply: FastifyReply){
        try{
            const user = await this.authService.register(request.body);
            return reply.status(201).send(user);
        }
        catch(error){
            return reply.status(400).send({message: (error as Error).message});
        }
    }
}