export const fetcher = async (url: string) =>
  (await fetch(url)).json();
