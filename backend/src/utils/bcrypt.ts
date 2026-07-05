import bcrypt from 'bcrypt';
import { config } from "../config/env";


export async function hashPassword(password: string): Promise<string>{
    return bcrypt.hash(password, config.security.bcryptSaltRounds);
};

export async function verifyPassword(password: string, hashedPassword: string){
    return bcrypt.compare(password, hashedPassword);
}