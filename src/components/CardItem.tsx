import "./CardItem.css";
// import Button from "./Button.tsx";
import type { TarotCard } from "../data/AllArcana.tsx";
import { getCardImage } from "../util/get-card-image";

interface CardItemProps {
  card: TarotCard;
  onSelect?: (card: TarotCard) => void;
}

const CardItem = ({ card, onSelect }: CardItemProps) => {
  return (
    <div className="CardItem" onClick={() => onSelect?.(card)}>
      <img src={getCardImage(card.id)} />
      <div className="hover_overlay">
        <p>해석 보기</p>
      </div>
      <div className="text_section">
        <p className="Number">{card.id}.</p>
        <p className="Name">{card.nameKo}</p>
      </div>
    </div>
  );
};

export default CardItem;
