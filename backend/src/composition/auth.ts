import { AuthController } from "../controllers/auth.controller";
import { AuthService } from "../services/auth.service";
import { UserRepository } from "../repositories/user.repository";

const userRepository = new UserRepository();
const authService = new AuthService(userRepository);

export const authController = new AuthController(authService);