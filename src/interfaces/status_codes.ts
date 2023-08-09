export interface StatusCodeDescription {
    code: number;
    msg: string;
  }

export interface StatusCode {
  [key: string]: StatusCodeDescription;
}
