import { isEmpty } from "lodash";

export function isEmptyValue(val: any) {
  if (typeof val === "string") {
    return val === "";
  }
  return isEmpty(val);
}

export function isAnyEmptyValue(...vals: Array<any>) {
  return vals.some(isEmptyValue);
}

export function isAllEmptyValue(...vals: Array<any>) {
  return vals.every(isEmptyValue);
}
