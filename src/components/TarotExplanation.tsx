import "./TarotExplanation.css";
import { useParams } from "react-router-dom";
import Card from "./Card";
import SpeechBubble from "./SpeechBubble";
import { allCards } from "../data/AllArcana";
import type { TarotCard } from "../data/AllArcana";

const TarotExplanation = () => {
  const { id, direction } = useParams<{ id: string; direction: string }>();
  const cardId = Number(id);
  const isReversed = direction === "reversed";
  const cardData: TarotCard = allCards.find((c) => c.id === cardId)!;

  if (!cardData) {
    return (
      <div className="TarotExplanation">해당 카드를 찾을 수 없습니다 😿</div>
    );
  }

  const keywords = isReversed
    ? cardData.keywordsReversed
    : cardData.keywordsUpright;

  const description = isReversed ? cardData.descReversed : cardData.descUpright;
  const fortune = isReversed
    ? cardData.fortuneReversed
    : cardData.fortuneUpright;

  return (
    <div className="TarotExplanation">
      <div className="background"></div>
      <Card cardId={cardId} isReversed={isReversed} />
      <SpeechBubble
        bubbleId={3}
        text={
          <>
            <p className="title">
              {`${cardData.id}번 카드인 ${cardData.nameKo} 카드를 ${
                isReversed ? "역방향" : "정방향"
              }으로 뽑으셨습니다.`}
            </p>
            <br />
            {`${isReversed ? "역방향" : "정방향"} ${cardData.nameKo} 카드의 `}
            <span className="highlight-label">키워드</span>
            {`는 "`}
            <span className="highlight-keyword">
              {Array.isArray(keywords) ? keywords.join(", ") : keywords}
            </span>
            {` " 이며,`}
            <br />
            {`이는 "`}
            <span className="highlight-desc">
              {Array.isArray(description)
                ? description.join(", ")
                : description}
            </span>
            {`" 라는 의미를 지닙니다.`}

            <br />
            <br />
            <span className="fortune-box">{fortune}</span>
          </>
        }
      />
    </div>
  );
};

export default TarotExplanation;
