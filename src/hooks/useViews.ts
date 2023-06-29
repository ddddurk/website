"use client";

import { fetcher } from "@src/lib";
import { useEffect } from "react";
import useSwr from "swr";

export const useViews = (
  slug: string,
  options?: { post?: boolean }
): [string] => {
  const API_URL = `/api/${slug}/views`;

  const { data } = useSwr(API_URL, fetcher);

  useEffect(() => {
    if (options?.post) fetch(API_URL, { method: "POST" });
  }, []);

  return [data ? data.views.toLocaleString() : undefined];
};
