import { FastifyInstance } from "fastify";

import { AuthController } from "../controllers/auth.controller";
import { AuthService } from "../services/auth.service";
import { UserRepository } from "../repositories/user.repository";
import { JWTService } from "../services/jwt.service";

export default function auth(app: FastifyInstance) {
    const userRepository = new UserRepository();
    
    const jwtService = new JWTService(app);

    const authService = new AuthService(userRepository, jwtService);

    const authController = new AuthController(authService);

    return{
        authController,
    }
}
