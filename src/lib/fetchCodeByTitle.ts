import { fetchCode } from "./fetchCode";

export const fetchCodeByTitle = (title: string) =>
  fetchCode().find((code) => code.title === title);
