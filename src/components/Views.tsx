"use client";

import { useViews } from "@src/hooks";

export interface ViewsProps {
  slug: Parameters<typeof useViews>[0];
  options?: Parameters<typeof useViews>[1];
}

const Views = ({ slug, options }: ViewsProps) => {
  const [views] = useViews(slug, options);

  return <span>{views || "..."} Views</span>;
};

export default Views;
