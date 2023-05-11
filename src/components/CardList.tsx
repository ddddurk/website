import type { ReactNode } from "react";

export interface CardListProps {
  children: ReactNode;
}

const CardList = ({ children }: CardListProps) => {
  return <div className="grid gap-4 md:gap-8">{children}</div>;
};

export default CardList;
