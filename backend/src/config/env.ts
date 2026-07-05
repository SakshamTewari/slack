import "dotenv/config";

export const config = {
    port: Number(process.env.PORT) || 3000,

    security: {
        bcryptSaltRounds: Number(process.env.BCRYPT_SALT_ROUNDS) || 12,
    }
}