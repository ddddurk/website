import { fetchWork } from "./fetchWork";

export const fetchWorkWithContent = () =>
  fetchWork().filter((work) => work.body.code.length > 0);
