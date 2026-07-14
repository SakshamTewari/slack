import { randomUUID } from "crypto";
import { User } from "../models/user";
import { UserRepository } from "../repositories/user.repository";
import { RegisterRequest, LoginRequest, LoginResponse } from "../types/auth";
import { hashPassword, verifyPassword } from "../utils/bcrypt";
import { JWTService } from "./jwt.service";

export class AuthService {
    constructor(private readonly userRepository: UserRepository, private readonly jwtService: JWTService){}

    // register user
    async register(data: RegisterRequest): Promise<User>{
        const existingUser = await this.userRepository.findByEmail(data.email);

        if(existingUser) throw new Error("Email already in use");
        const passwordHash = await hashPassword(data.password);

        const newUser: User = {
            id: randomUUID(),
            name: data.name,
            email: data.email,
            passwordHash,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        return this.userRepository.create(newUser);
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