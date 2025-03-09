import * as moment from "moment";

export class UDate {
  value?: Date;
  execute() {
    this.value = moment.utc().toDate();
    return this;
  }
  getValue(): Date | undefined {
    return this.value;
  }

  static generate(): Date | undefined {
    let date = new UDate();
    return date.execute().getValue();
  }
}
