import "./CardItem.css";
// import Button from "./Button.tsx";
import type { TarotCard } from "../data/majorArcana.tsx";
import { getCardImage } from "../util/get-card-image";

interface CardItemProps {
  card: TarotCard;
  // onSelect: (card: TarotCard, isReversed: boolean) => void;
}

const CardItem = ({ card }: CardItemProps) => {
  return (
    <div className="CardItem">
      <img src={getCardImage(card.id)} />
      <div className="text_section">
        <p className="Number">{card.id}.</p>
        <p className="Name">{card.nameKo}</p>
      </div>
    </div>
  );
};

export default CardItem;
