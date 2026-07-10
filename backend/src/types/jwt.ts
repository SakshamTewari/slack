export interface AccessTokenPayload {
    userId: string;
    email: string;
};

export interface RefreshTokenPayload {
    userId: string;
};

export interface TokenPair {
    accessToken: string;
    refreshToken: string;
}