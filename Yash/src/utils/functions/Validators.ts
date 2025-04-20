import { isEmpty } from "lodash";

export function isEmptyValue(val: any) {
  if (typeof val === "string") {
    return val === "";
  }
  return isEmpty(val);
}
