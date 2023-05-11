import { fetchWork } from "./fetchWork";

export const fetchWorkBySlug = (slug: string) =>
  fetchWork().find((work) => {
    return work.slug === slug;
  });
