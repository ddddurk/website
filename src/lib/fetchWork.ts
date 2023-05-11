import { allWorks } from "@contentlayer";

export const fetchWork = () =>
  allWorks.sort((a, b) =>
    a.isFeatured
      ? b.isFeatured
        ? a.title < b.title
          ? -1
          : 1
        : -1
      : a.title < b.title
      ? -1
      : 1
  );
