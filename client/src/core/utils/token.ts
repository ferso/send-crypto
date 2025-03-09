export class Token {
  value?: string;
  execute() {
    // this.value = RToken.create("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789")(16);
  }
  getValue(): string {
    // return this.value;
    return "";
  }

  static generate(): string {
    let uuid = new Token();
    uuid.execute();
    return uuid.getValue();
  }
}
