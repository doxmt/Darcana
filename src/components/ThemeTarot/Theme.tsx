import "./Theme.css";
import TarotGirl from "../TarotGirl";
import Button from "../Button";
import type { ThemeProps } from "../../types/stepProps";
import { useState } from "react";

const Theme = ({ onNext, setTopic }: ThemeProps) => {
  const [input, setInput] = useState("");
  return (
    <div className="Theme">
      <TarotGirl tarotgirlId={3} />
      <div className="user_section">
        <input
          type="text"
          placeholder="주제를 입력해 주세요"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          onClick={() => {
            setTopic(input);
            onNext();
          }}
          text={"다음"}
        />
      </div>
    </div>
  );
};

export default Theme;
