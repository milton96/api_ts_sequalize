import { Response } from "express";
import codesHttp from "../status_codes";
import { StatusCodeDescription } from "interfaces/status_codes";

export default class ResponseHelper {
  private messages: string[];
  private response?: any;
  private error?: any;

  constructor() {
    this.messages = [];
  }

  /**
   * setResponse
   */
  public setResponse(response: any) {
    this.response = response;
  }

  public setError(error: any) {
    this.error = error;
  }

  /**
   * addMessage
   */
  public addMessage(message: string) {
    this.messages.push(message);
  }

  /**
   * getResponse
   */
  public getResponse(res: Response, code: StatusCodeDescription) {
    if (this.error !== null && this.error !== undefined) {
      if (this.error["code"]) {
        const status =
          Object.keys(codesHttp).find(
            (h) => codesHttp[h]["code"] === this.error["code"]
          ) || "BAD_REQUEST";

        code = codesHttp[status];
        this.messages.push(this.error["msg"]);
        this.error = undefined;
      }
    }
    return res
      .status(code["code"])
      .json({
        status: code["code"],
        desc_estatus: code["msg"],
        messages: this.messages.length ? this.messages : undefined,
        response: this.response,
        error: this.error,
      })
      .end();
  }
}
