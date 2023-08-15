import { Request, Response } from "express";

import codesHttp from "../status_codes";
import ResponseHelper from "../helpers/response";

import { test as connTest } from "../helpers/database";

const test = async (req: Request, res: Response) => {
  const response = new ResponseHelper();
  try {
    const msg = await connTest();
    response.addMessage(msg);
    return response.getResponse(res, codesHttp["OK"]);
  } catch (error) {
    response.setError(error);
    return response.getResponse(res, codesHttp["INTERNAL_SERVER_ERROR"]);
  }
};

const login = async (req: Request, res: Response) => {
  const response = new ResponseHelper();
  try {
    const info = req["body"];

    response.setResponse(info);
    return response.getResponse(res, codesHttp["OK"]);
  } catch (error: any) {
    response.setError(error);
    return response.getResponse(res, codesHttp["INTERNAL_SERVER_ERROR"]);
  }
};

export default {
  test,
  login,
};
