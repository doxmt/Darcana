import "./Draw.css";
import TarotGirl from "../TarotGirl";
import Button from "../Button";
import cardBack from "../../assets/CardBehind.png";
import { useState } from "react";
import type { DrawStepProps } from "../../types/stepProps";

const Draw = ({ onNext, onPickThreeCard }: DrawStepProps) => {
  const [selected, setSelected] = useState<number[]>([]);

  const toggleSelect = (idx: number) => {
    if (selected.includes(idx)) {
      setSelected(selected.filter((i) => i !== idx));
    } else if (selected.length < 3) {
      setSelected([...selected, idx]);
    }
  };

  const handleConfirm = () => {
    if (selected.length === 3) {
      onPickThreeCard();
      onNext();
    } else {
      alert("카드를 3장 선택해야 합니다!");
    }
  };

  return (
    <div className="Draw">
      <div className="exp">
        <div className="exp-text">
          {selected.length < 3
            ? `카드를 ${3 - selected.length}장 더 선택해 주세요`
            : "선택 완료!"}
        </div>
        <Button onClick={handleConfirm} text={"다음"} />
      </div>

      <div className="main_section">
        <div className="tarotgirl_section">
          <TarotGirl tarotgirlId={3} />
        </div>

        <div className="card_section">
          {Array.from({ length: 77 }).map((_, idx) => (
            <img
              key={idx}
              className={`card-back ${
                selected.includes(idx) ? "selected" : ""
              }`}
              src={cardBack}
              alt={`card-back-${idx + 1}`}
              onClick={() => toggleSelect(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Draw;
