"use client";

import { useCopy } from "@hooks";
import clsx from "clsx";

interface ColorProps {
  hex: string;
  label: string;
}

const Color = ({ hex, label }: ColorProps) => {
  const [copy, isCopied] = useCopy(hex);

  return (
    <div className="grid gap-1.5">
      <button
        className={clsx(
          "h-16 w-full rounded-xl border border-gray-200",
          { "ring-4 ring-cyan-400/50": isCopied }
        )}
        onClick={() => copy()}
        style={{ backgroundColor: hex }}
      />
      <div className="relative grid grid-cols-[auto,1fr] items-center gap-2">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-xs md:text-sm font-light text-gray-500">
          {hex}
        </span>
      </div>
    </div>
  );
};

export default Color;
