import { v4 as uuidv4 } from "uuid";

export class UUID {
  value: string = "";
  execute() {
    this.value = uuidv4();
  }
  getValue(): string {
    return this.value;
  }

  static generate(): string {
    let uuid = new UUID();
    uuid.execute();
    return uuid.getValue();
  }
}
