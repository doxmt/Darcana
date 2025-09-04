import "./CardContainer.css";
import SearchBar from "./SearchBar";
import tarotCardIcon from "../assets/TarotCardIcon.svg";
import { useState } from "react";
import Button from "./Button";
import CardList from "./CardList";
import Overlay from "./Overlay";
import type { TarotCard } from "../data/majorArcana";
const CardContainer = () => {
  const [activeFilter, setActiveFilter] = useState("전체");
  const onclickFilter = (value: string) => {
    setActiveFilter(value);
  };

  const [selectedCard, setSelectedCard] = useState<TarotCard | null>(null);

  return (
    <div className="CardContainer">
      <div className="title">
        <img src={tarotCardIcon} />
        <h4>카드 해석</h4>
      </div>
      <SearchBar />

      <div className="filters">
        {["전체", "메이저", "마이너"].map((filter) => (
          <Button
            key={filter}
            text={filter}
            onClick={() => onclickFilter(filter)}
            isActive={activeFilter === filter}
          />
        ))}
      </div>
      <CardList onSelect={(card) => setSelectedCard(card)} />
      <Overlay
        isOpen={!!selectedCard}
        card={selectedCard}
        onClose={() => setSelectedCard(null)}
      />
    </div>
  );
};

export default CardContainer;
