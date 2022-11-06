import { tags } from "@config/constants";
import classNames from "classnames";

export const getCategries = (...keys: string[]) => {
  return tags.filter((s) => keys.includes(s.value));
};
export const cx = classNames;
