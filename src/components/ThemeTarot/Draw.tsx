import "./Draw.css";
import TarotGirl from "../TarotGirl";
import Button from "../Button";
import cardBack from "../../assets/CardBehind.png";
import type { StepProps } from "../../types/stepProps";

const Draw = ({ onNext }: StepProps) => {
  return (
    <div className="Draw">
      <div className="exp">
        {" "}
        <div className="exp-text">카드를 3장 선택해 주세요</div>
        <Button onClick={onNext} text={"선택 완료"} />
      </div>

      <div className="main_section">
        <div className="tarotgirl_section">
          <TarotGirl tarotgirlId={3} />
        </div>

        <div className="card_section">
          {Array.from({ length: 77 }).map((_, idx) => (
            <img
              key={idx}
              className="card-back"
              src={cardBack}
              alt={`card-back-${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Draw;
