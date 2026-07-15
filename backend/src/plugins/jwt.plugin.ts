import fp from "fastify-plugin";
import fastifyJwt from "@fastify/jwt";
import { config } from "../config/env";

export default fp(async (app) => {
    await app.register(fastifyJwt, {
        secret: config.security.jwtSecret
    });
})