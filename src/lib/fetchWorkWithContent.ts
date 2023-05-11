import { fetchWork } from "./fetchWork";

export const fetchWorkWithContent = () =>
  fetchWork().filter((work) => work.body.raw.length > 0);
