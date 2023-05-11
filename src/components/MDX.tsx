"use client";

import { useMDXComponent } from "next-contentlayer/hooks";

import { mdxComponents } from "./mdxComponents";

export interface MDXProps {
  code: string;
}

const MDX = ({ code }: MDXProps) => {
  const MDXComponent = useMDXComponent(code);

  return <MDXComponent components={mdxComponents} />;
};

export default MDX;
