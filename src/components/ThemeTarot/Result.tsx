import "./Result.css";
import TarotGirl from "../TarotGirl";
import SpeechBubble from "../SpeechBubble";
import Button from "../Button";
import { useState } from "react";
import type { ResultStepProps } from "../../types/stepProps";
import { getCardImage } from "../../util/get-card-image";

const Result = ({ pickCards, topic }: ResultStepProps) => {
  const Card1 = pickCards[0];
  const Card2 = pickCards[1];
  const Card3 = pickCards[2];

  const [resultstep, setResultStep] = useState(1);

  return (
    <div className="Result">
      <TarotGirl tarotgirlId={3} />

      {resultstep === 1 && (
        <SpeechBubble
          bubbleId={4}
          text={
            <div className="bubble-content">
              <img
                src={getCardImage(Card1.id)}
                alt={Card1.nameKo}
                className="bubble-card-img"
              />
              <div className="bubble-text-block">
                첫 번째로 뽑은 카드는{" "}
                <span className="card-direction">
                  {Card1.isReversed ? "역방향" : "정방향"}
                </span>{" "}
                <span className="card-number">{Card1.id}번</span>{" "}
                <span className="card-name">{Card1.nameKo}</span> 카드입니다.
                <span className="card-explanation">
                  {topic}에 대한 카드설명....
                </span>
              </div>
            </div>
          }
        >
          <Button onClick={() => setResultStep(2)} text="다음" />
        </SpeechBubble>
      )}

      {resultstep === 2 && (
        <SpeechBubble
          bubbleId={4}
          text={
            <div className="bubble-content">
              <img
                src={getCardImage(Card2.id)}
                alt={Card2.nameKo}
                className="bubble-card-img"
              />
              <div className="bubble-text-block">
                두 번째로 뽑은 카드는{" "}
                <span className="card-direction">
                  {Card2.isReversed ? "역방향" : "정방향"}
                </span>{" "}
                <span className="card-number">{Card2.id}번</span>{" "}
                <span className="card-name">{Card2.nameKo}</span> 카드입니다.
                <span className="card-explanation">
                  {topic}에 대한 카드설명....
                </span>
              </div>
            </div>
          }
        >
          <Button onClick={() => setResultStep(3)} text="다음" />
        </SpeechBubble>
      )}

      {resultstep === 3 && (
        <SpeechBubble
          bubbleId={4}
          text={
            <div className="bubble-content">
              <img
                src={getCardImage(Card3.id)}
                alt={Card3.nameKo}
                className="bubble-card-img"
              />
              <div className="bubble-text-block">
                마지막으로 뽑은 카드는{" "}
                <span className="card-direction">
                  {Card3.isReversed ? "역방향" : "정방향"}
                </span>{" "}
                <span className="card-number">{Card3.id}번</span>{" "}
                <span className="card-name">{Card3.nameKo}</span> 카드입니다.
                <span className="card-explanation">
                  {topic}에 대한 카드설명....
                </span>
              </div>
            </div>
          }
        />
      )}
    </div>
  );
};

export default Result;
