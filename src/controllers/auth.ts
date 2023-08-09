import { Request, Response } from "express";

import statusCodes from "../status_codes";

const test = async (req: Request, res: Response) => {
  return res.send("<h1>Hola mundo</h1>");
};

const login = async (req: Request, res: Response) => {
  try {
    const info = req["body"];
    console.log(info);

    return res.status(statusCodes["OK"]["code"]).end();
  } catch (error: any) {
    if (error["desc"]) return res.status(error.desc).json({ error });
    return res.status(500).json({ error });
  }
};

export default {
  test,
  login,
};
