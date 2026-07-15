import { FastifyInstance } from "fastify";

import { RegisterRequest, LoginRequest } from "../types/auth";
import { RegisterSchema, LoginSchema } from "../schemas/auth.schema";
import { AuthController } from "../controllers/auth.controller";


export async function authRoutes(app: FastifyInstance, { authController }: { authController: AuthController} ){
    
        // Register
        app.post<{Body: RegisterRequest}>("/register", { schema: RegisterSchema }, async (request, reply) => {
            return authController.register(request, reply);
        });

        app.post<{Body: LoginRequest}>("/login", {schema: LoginSchema}, async (request, reply) => {
            return authController.login(request, reply);
        });
};