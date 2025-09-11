import "./Theme.css";
import TarotGirl from "../TarotGirl";
import Button from "../Button";
import type { StepProps } from "../../types/stepProps";

const Theme = ({ onNext }: StepProps) => {
  return (
    <div className="Theme">
      <TarotGirl tarotgirlId={3} />
      <div className="user_section">
        <input type="text" placeholder="주제를 입력해 주세요" />
        <Button onClick={onNext} text={"다음"} />
      </div>
    </div>
  );
};

export default Theme;
