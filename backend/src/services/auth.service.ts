import { randomUUID } from "crypto";
import { User } from "../models/user";
import { UserRepository } from "../repositories/user.repository";
import { RegisterRequest } from "../types/auth";

export class AuthService {
    constructor(private readonly userRepository: UserRepository){}

    // register user
    async register(data: RegisterRequest): Promise<User>{
        const existingUser = await this.userRepository.findByEmail(data.email);

        if(existingUser) throw new Error("Email already in use");

        const newUser: User = {
            id: randomUUID(),
            name: data.name,
            email: data.email,
            passwordHash: data.password,  // HASH LATER
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        return this.userRepository.create(newUser);
    }
}