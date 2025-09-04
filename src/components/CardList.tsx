import { majorArcana } from "../data/majorArcana";
import CardItem from "./CardItem";
import "./CardList.css";

const CardList = () => {
  return (
    <div className="CardList">
      {majorArcana.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardList;
