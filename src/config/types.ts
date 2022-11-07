import { ReactNode } from "react";

export type Service = {
  value: string;
  text: ReactNode;
};

export type Tag = {
  value: string;
  name: string;
};

export type ProjectCard = {
  tags: Tag[];
  title: string;
  imgSrc: string;
};
