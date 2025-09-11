import "./Result1.css";
import TarotGirl from "../TarotGirl";
import SpeechBubble from "../SpeechBubble";
import Button from "../Button";
import { useState } from "react";
const Result1 = () => {
  const [resultstep, setResultStep] = useState(1);
  return (
    <div className="Result1">
      <TarotGirl tarotgirlId={3} />
      {resultstep === 1 && (
        <SpeechBubble
          children={
            <Button
              onClick={() => {
                setResultStep(2);
              }}
              text={"다음"}
            />
          }
          text={"처음으로 뽑으신 카드는~ "}
          bubbleId={3}
        />
      )}
      {resultstep === 2 && (
        <SpeechBubble
          children={
            <Button
              onClick={() => {
                setResultStep(3);
              }}
              text={"다음"}
            />
          }
          text={"다음으로 뽑으신 카드는~ "}
          bubbleId={3}
        />
      )}
      {resultstep === 3 && (
        <SpeechBubble text={"마지막으로 뽑으신 카드는~ "} bubbleId={3} />
      )}
    </div>
  );
};

export default Result1;
