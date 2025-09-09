import "./CardContainer.css";
import SearchBar from "./SearchBar";
import tarotCardIcon from "../assets/TarotCardIcon.svg";
import { useState } from "react";
import Button from "./Button";
import CardList from "./CardList";
import Overlay from "./Overlay";
import type { TarotCard } from "../data/AllArcana";
import { allCards } from "../data/AllArcana";

const CardContainer = () => {
  const [activeFilter, setActiveFilter] = useState("전체");
  const [selectedCard, setSelectedCard] = useState<TarotCard | null>(null);
  const [search, setSearch] = useState<string>("");

  const onclickFilter = (value: string) => {
    setActiveFilter(value);
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    let filtered = allCards;

    if (search !== "") {
      filtered = filtered.filter(
        (card) =>
          card.nameKo.includes(search) ||
          card.nameEn.toLowerCase().includes(search.toLowerCase()) ||
          card.number === search
      );
    }

    if (activeFilter === "메이저") {
      filtered = filtered.filter((card) => !card.suit);
    } else if (activeFilter === "마이너") {
      filtered = filtered.filter((card) => card.suit);
    }

    return filtered;
  };

  return (
    <div className="CardContainer">
      <div className="title">
        <img src={tarotCardIcon} />
        <h4>카드 해석</h4>
      </div>

      <SearchBar value={search} onChange={onChangeSearch} />

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

      <CardList
        cards={getFilteredData()}
        onSelect={(card) => setSelectedCard(card)}
      />

      <Overlay
        isOpen={!!selectedCard}
        card={selectedCard}
        onClose={() => setSelectedCard(null)}
      />
    </div>
  );
};

export default CardContainer;
