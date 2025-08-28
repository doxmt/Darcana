import "./TarotExplanation.css";
import { useParams } from "react-router-dom";
import Card from "./Card";
import SpeechBubble from "./SpeechBubble";
import { majorArcana } from "../data/majorArcana";
import type { TarotCard } from "../data/majorArcana";

const TarotExplanation = () => {
  const { id, direction } = useParams<{ id: string; direction: string }>();
  const cardId = Number(id);
  const isReversed = direction === "reversed";
  const cardData: TarotCard = majorArcana.find((c) => c.id === cardId)!;

  return (
    <div className="TarotExplanation">
      <div className="background"></div>
      <Card cardId={cardId} isReversed={isReversed} />
      <SpeechBubble
        text={`${cardData.id}번 카드인 ${cardData.nameKo} 카드를 ${
          isReversed ? "역방향" : "정방향"
        }으로 뽑으셨습니다`}
        bubbleId={3}
      />
    </div>
  );
};

export default TarotExplanation;
