import { randomUUID } from "crypto";
import { User } from "../models/user.model";
import { UserRepository } from "../repositories/user.repository";
import { RegisterRequest, LoginRequest, LoginResponse, RegisterResponse } from "../types/auth";
import { hashPassword, verifyPassword } from "../utils/bcrypt";
import { JWTService } from "./jwt.service";

export class AuthService {
    constructor(private readonly userRepository: UserRepository, private readonly jwtService: JWTService){}

    // register user
    async register(request: RegisterRequest): Promise<RegisterResponse>{

        const existingUser = await this.userRepository.findByEmail(request.email);

        if(existingUser) throw new Error("Email already in use");
        const passwordHash = await hashPassword(request.password);

        const newUser: User = {
            id: randomUUID(),
            name: request.name,
            email: request.email,
            passwordHash,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        await this.userRepository.create(newUser);

        return {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
        }
    };

    // login user
    async login(request: LoginRequest) : Promise<LoginResponse> {

        const user = await this.userRepository.findByEmail(request.email);

        if(!user) throw new Error("Invalid email or password");

        // verify password
        const isPasswordValid = await verifyPassword(request.password, user.passwordHash);
        if(!isPasswordValid) throw new Error("Invalid email or password");
        
        return await this.jwtService.issueTokens({
            userId: user.id,
            email: user.email,
        }, {
            userId: user.id,
        });
    }
}