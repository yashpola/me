import { ReactNode } from "react";

export interface Social {
  name: string;
  icon: ReactNode;
  link: string;
}

export interface CatFactResponse {
  fact: string;
}
