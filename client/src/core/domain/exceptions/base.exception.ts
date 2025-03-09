export class BaseException extends Error {
  code: string;
  message: string;
  original?: any;
  constructor(code: string, message: string, original?: any) {
    super(message);
    this.name = "BaseException";
    this.code = code;
    this.message = message;
    this.original = original;
  }
}
1;
