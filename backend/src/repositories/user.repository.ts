import { User } from "../models/user.model";

export class UserRepository {
    private users: User[] = [];

    // create user
    async create(user: User): Promise<User> {
        this.users.push(user);
        return user;
    }

    // find by email
    async findByEmail(email: string): Promise<User | null> {
        const user = this.users.find(user => user.email.toLowerCase() === email.toLowerCase());
        return user ?? null;
    }
}