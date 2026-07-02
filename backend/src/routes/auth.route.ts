import { FastifyInstance } from "fastify";

import { AuthController } from "../controllers/auth.controller";
import { AuthService } from "../services/auth.service";
import { UserRepository } from "../repositories/user.repository";
import { RegisterRequest } from "../types/auth";

export async function authRoutes(app: FastifyInstance){
    
        const userRepository = new UserRepository();
        const authService = new AuthService(userRepository);
        const authController = new AuthController(authService);

        // POST
        app.post<{Body: RegisterRequest}>("/auth/register", async (request, reply) => {
            return authController.register(request, reply);
        })
};