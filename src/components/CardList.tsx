import { majorArcana } from "../data/majorArcana";
import CardItem from "./CardItem";
import "./CardList.css";
import type { TarotCard } from "../data/majorArcana";

interface CardListProps {
  onSelect?: (card: TarotCard) => void;
}

const CardList = ({ onSelect }: CardListProps) => {
  return (
    <div className="CardList">
      {majorArcana.map((card) => (
        <CardItem key={card.id} card={card} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default CardList;
