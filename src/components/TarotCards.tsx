import "./TarotCards.css";
import Button from "./Button";

type TarotCardsProps = {
  onClickBtn: () => void; // ✅ props 타입 정의
};

const TarotCards = ({ onClickBtn }: TarotCardsProps) => {
  return (
    <div className="TarotCards">
      <div className="cards-container">
        <div className="card"></div>
        <Button text={"카드 뽑기"} onClick={onClickBtn} />
      </div>
    </div>
  );
};

export default TarotCards;
