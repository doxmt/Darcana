import { majorArcana } from "../data/majorArcana";
import type { TarotCard } from "../data/majorArcana";

export type DrawResult = {
  card: TarotCard;
  isReversed: boolean;
};
export const pickRandomCard = (withReversed = true): DrawResult => {
  const card = majorArcana[Math.floor(Math.random() * majorArcana.length)];
  const isReversed = withReversed ? Math.random() < 0.5 : false;
  return { card, isReversed };
};
