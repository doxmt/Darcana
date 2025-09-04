import "./Card.css";
import { getCardImage } from "../util/get-card-image";

export type CardProps = {
  cardId?: number;
  isReversed?: boolean;
};
const Card = ({ cardId, isReversed }: CardProps) => {
  if (typeof cardId !== "number") return null;
  return (
    <img
      className={`card_img ${isReversed ? "reversed" : ""}`}
      src={getCardImage(cardId)}
      draggable={false}
    />
  );
};

export default Card;
