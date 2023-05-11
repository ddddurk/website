import { fetchWork } from "./fetchWork";

export const fetchWorkIsFeatured = () =>
  fetchWork().filter((work) => work.isFeatured);
