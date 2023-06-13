import { allWorks } from "@contentlayer";

export const fetchWork = () =>
  allWorks
    .map((work, index) => ({ ...work, index }))
    .sort((a, b) =>
      a.isFeatured
        ? b.isFeatured
          ? a.title < b.title
            ? -1
            : 1
          : -1
        : b.isFeatured
        ? 1
        : a.title < b.title
        ? -1
        : 1
    )
    .map(({ index, ...work }) => work);
