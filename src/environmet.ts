/* Manera recomendada por la documentación de dotenv */
import "dotenv/config";

/* Manera tradicional */
//import dotenv from 'dotenv';
//dotenv.config();

const env = {
  server: {
    PORT: parseInt(process.env["PORT"] || "3000", 10),
  },
  db: {
    DB_DIALECT: process.env["DB_DIALECT"] || "postgres",
    DB_NAME: process.env["DB_NAME"] || "test",
    DB_HOST: process.env["DB_HOST"] || "test",
    DB_USER: process.env["DB_USER"] || "test",
    DB_PASSWORD: process.env["DB_PASSWORD"] || "test",
  }
};

export default env;
