// import "dotenv/config";

// export const PORT = process.env.PORT;

import dotenv from "dotenv";
dotenv.config({path: "./src/config/.env"});

const { PORT, PROTO, HOST }= process.env

export { PORT, PROTO, HOST };