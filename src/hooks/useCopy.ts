"use client";

import copyToClipboard from "copy-to-clipboard";
import { useState } from "react";

export const useCopy = (text: string): [() => void, boolean] => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = () => {
    setIsCopied(true);

    copyToClipboard(text);

    setTimeout(() => setIsCopied(false), 2000);
  };

  return [copy, isCopied];
};
