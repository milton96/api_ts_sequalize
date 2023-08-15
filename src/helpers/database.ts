import { Sequelize, Dialect } from "sequelize";
import env from "../environmet";

const pool = () => {
  try {
    const db = env["db"];
    const sequelize = new Sequelize(
      db["DB_NAME"],
      db["DB_USER"],
      db["DB_PASSWORD"],
      {
        dialect: db["DB_DIALECT"] as Dialect,
        host: db["DB_HOST"],
      }
    );

    return sequelize;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const test = async () => {
  try {
    const connection = pool();
    if (!connection)
      throw { code: 400, msg: "No es posible realizar el test de conexión" };

    await connection.authenticate();
    await connection.close()
    return "Conexión exitosa";
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  test,
};
