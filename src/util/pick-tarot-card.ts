import { allCards } from "../data/AllArcana";
import type { TarotCard } from "../data/AllArcana";

export type DrawResult = {
  card: TarotCard;
  isReversed: boolean;
};
export type SimpleDrawResult = {
  id: number;
  nameKo: string;
  isReversed: boolean;
};
export const pickRandomCard = (withReversed = true): DrawResult => {
  const card = allCards[Math.floor(Math.random() * 22)]; //메이저카드만
  const isReversed = withReversed ? Math.random() < 0.5 : false;
  return { card, isReversed };
};

export const pickRandomCardAll = (withReversed = true): DrawResult => {
  const card = allCards[Math.floor(Math.random() * 76)]; //메이저+마이너
  const isReversed = withReversed ? Math.random() < 0.5 : false;
  return { card, isReversed };
};
