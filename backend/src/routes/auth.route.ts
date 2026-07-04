import { FastifyInstance } from "fastify";

import { authController } from "../composition/auth";
import { RegisterRequest } from "../types/auth";

import { registerSchema } from "../schemas/auth.schema";

export async function authRoutes(app: FastifyInstance){
    
        // POST
        app.post<{Body: RegisterRequest}>("/register", { schema: registerSchema }, async (request, reply) => {
            return authController.register(request, reply);
        })
};