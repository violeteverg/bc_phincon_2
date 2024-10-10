import { ok } from "assert";
import { Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

export class ResponseStatusMsg {
  responseStatusMsg(
    res: Response,
    code: StatusCodes,
    status: string,
    type?: string,
    data?,
    message?: string
  ) {
    switch (type) {
      case "success":
        res.status(code).json({
          statusCode: StatusCodes[status],
          status: type,
          message: ReasonPhrases[status],
          data: data,
        });
        break;
      case "error":
        res.status(code).send({
          statusCode: StatusCodes[status],
          status: type,
          message: message,
        });
        break;
      default:
        res.status(code).send({
          statusCode: StatusCodes[status],
          status: status,
          message: ReasonPhrases[status],
        });
    }
  }
}
