import { FastifyInstance } from "fastify";
import { config } from "../config/env";
import { AccessTokenPayload, RefreshTokenPayload, TokenPair } from "../types/jwt";
import { REPLCommand } from "repl";

export class JWTServoce {
    constructor(private readonly app: FastifyInstance) {}

    /**
     * Called only during LOGIN
     */
    async issueTokens(accessTokenPayload: AccessTokenPayload, refreshTokenPayload: RefreshTokenPayload): Promise<TokenPair>{
        const accessToken = await this.generateAccessToken(accessTokenPayload);
        const refreshToken = await this.generateRefreshToken(refreshTokenPayload);

        return {
            accessToken,
            refreshToken
        }
    };

    // Verify Access Token
    async verifyAccessToken(token: string): Promise<AccessTokenPayload> {
        return this.app.jwt.verify<AccessTokenPayload>(token);
    };

    // Verify Refresh Token
    async verifyRefreshToken(token:string): Promise<RefreshTokenPayload>{
        return this.app.jwt.verify<RefreshTokenPayload>(token);
    }


    // Generate Access Token
    private async generateAccessToken(payload: AccessTokenPayload): Promise<string>{
        return this.app.jwt.sign(
            payload,
            {
                expiresIn: config.security.jwtAccessTokenExpiry,
            }
        );
    };

    // Generate Refresh Token
    private async generateRefreshToken(payload: RefreshTokenPayload): Promise<string>{
        return this.app.jwt.sign(
            payload,
            {
                expiresIn: config.security.jwtRefreshTokenExpiry,
            }
        )
    };
}
