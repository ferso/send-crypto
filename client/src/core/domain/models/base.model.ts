import { UUID } from "@core/utils/uuid";
import { UDate } from "@core/utils/date";
import { Token } from "@core/utils/token";

export class BaseModel<T = string> {
  id?: T | string;
  name?: string | undefined;
  created_at?: Date;
  updated_at?: Date;
  enabled?: boolean;
  token?: string;

  static of<T, E, V extends BaseModel<T>>(
    this: new (data?: E) => V,
    data?: E
  ): V {
    return new this(data);
  }

  /**
   *  Generate a uuid v4 for id propierty
   */
  genId() {
    this.id = UUID.generate();
  }

  /**
   *  Generate a uuid v4 for id propierty
   */
  genToken() {
    this.token = Token.generate();
  }

  private genCurrentDate() {
    return UDate.generate();
  }

  setId(value?: T) {
    if (!!value) {
      this.id = value;
    }
  }

  setName(value: string | undefined): string | undefined {
    if (value) {
      if (value.length !== 0) {
        if (value) {
          return (this.name = value.trim());
        }
      }
    }
  }

  setEnabled(value?: boolean) {
    this.enabled = value;
  }
  /**
   *  Generate a date for create_at propierty
   */
  genCreatedAt() {
    this.created_at = this.genCurrentDate();
  }

  /**
   *  Generate a date for updated_at propierty
   */
  genUpdatedAt() {
    this.updated_at = this.genCurrentDate();
  }

  setValueDate(value: Date | string) {
    if (typeof value === "string") {
      return new Date(value);
    }
    return value;
  }

  setCreatedAt(value?: Date | string) {
    if (value) {
      this.created_at = this.setValueDate(value);
    }
  }

  setUpdatedAt(value?: Date | string) {
    if (value) {
      this.updated_at = this.setValueDate(value);
    }
  }

  toNotNullProps(): any {
    const obj: any = {};
    for (const key in this) {
      if (typeof this[key] !== "undefined" && typeof this[key] !== null) {
        obj[key] = this[key];
      }
    }
    return obj;
  }
}

export default BaseModel;
