import { BaseException } from "./base.exception";

export class ServiceException extends BaseException {
  constructor(code: string, message: string, original?: any) {
    super(code, message, original);
    this.name = "ServiceException";
  }
}
