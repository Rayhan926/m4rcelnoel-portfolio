import { tags } from "@config/constants";
import classNames from "classnames";

export const getTags = (...keys: string[]) => {
  return tags.filter((s) => keys.includes(s.value));
};
export const cx = classNames;
