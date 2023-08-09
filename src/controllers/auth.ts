import { Request, Response } from "express";

const test = async (req: Request, res: Response) => {
  return res.send("<h1>Hola mundo</h1>");
};

export default {
  test,
};
