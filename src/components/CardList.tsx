import CardItem from "./CardItem";
import "./CardList.css";
import type { TarotCard } from "../data/AllArcana";

interface CardListProps {
  cards: TarotCard[];
  onSelect?: (card: TarotCard) => void;
}

const CardList = ({ cards, onSelect }: CardListProps) => {
  return (
    <div className="CardList">
      {cards.map((card: TarotCard) => (
        <CardItem key={card.id} card={card} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default CardList;
