import { Container } from "inversify";

export const container = new Container({ autobind: true });
// container
//   .bind<ValidateOtpLocalSource>("ValidateOtpLocalSource")
//   .to(ValidateOtpLocalSource);
