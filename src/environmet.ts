/* Manera recomendada por la documentación de dotenv */
import "dotenv/config"

/* Manera tradicional */
//import dotenv from 'dotenv';
//dotenv.config();

const ENV = {
    "server": {
        "PORT": parseInt(process.env["PORT"] || "3000", 10)
    }
};

export default ENV;