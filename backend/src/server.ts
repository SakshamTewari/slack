import app from "./app";
import { config } from "./config/env";

const start = async () => {
    try {
        await app.listen({
            port: config.port,
            host: "0.0.0.0",
        });
        console.log(`Server started on http://localhost:${config.port}`);
    } catch (error){
        app.log.error(error);
        process.exit(1);   // 0 -> success , non-zero -> failure  ; ensures remaining active resources (timers, sockets, etc) also exit
    }
};

start();