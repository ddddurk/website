"use client";

export const useScroll = (
  options: ScrollToOptions
): [() => void] => {
  const scroll = () => window.scrollTo(options);

  return [scroll];
};
