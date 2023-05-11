import { fetchWork } from "./fetchWork";

export const fetchWorkBySlug = (slug: string) => {
  return fetchWork().find((work) => {
    return work.slug === slug;
  });
};
