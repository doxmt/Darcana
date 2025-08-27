import "./TarotCards.css";
import Button from "./Button";
import cardBack from "../assets/CardBehind.png";
import Card from "./Card";

type TarotCardsProps = {
  onClickBtn: () => void;
  cardId?: number;
  isReversed?: boolean;
};

const TarotCards = ({ onClickBtn, cardId, isReversed }: TarotCardsProps) => {
  const hasDraw = typeof cardId === "number";

  return (
    <div className="TarotCards">
      <div className="cards-container">
        <div className={`card ${hasDraw ? "revealed" : ""}`}>
          {hasDraw ? (
            <Card cardId={cardId!} isReversed={isReversed} />
          ) : (
            <img src={cardBack} alt="카드 뒷면" />
          )}
        </div>

        <Button text="카드 뽑기" onClick={onClickBtn} />
      </div>
    </div>
  );
};

export default TarotCards;
