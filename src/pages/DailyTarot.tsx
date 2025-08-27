import Header from "../components/Header";
import Footer from "../components/Footer";
import TarotCards from "../components/TarotCards";
import TarotGirl from "../components/TarotGirl";
import SpeechBubble from "../components/SpeechBubble";
import { useState } from "react";
import { pickRandomCard } from "../util/pick-tarot-card";
import type { DrawResult } from "../util/pick-tarot-card";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const DailyTarot = () => {
  const nav = useNavigate();
  const [draw, setDraw] = useState<DrawResult | null>(null);
  const onClickBtn = () => {
    const result = pickRandomCard();
    setDraw(result);
  };

  return (
    <div className="DailyTarot">
      <Header />
      <TarotCards
        onClickBtn={onClickBtn}
        cardId={draw?.card.id}
        isReversed={draw?.isReversed}
      />
      <TarotGirl tarotgirlId={2} />
      <SpeechBubble
        bubbleId={2}
        text={
          draw
            ? `${draw.card.id}번 카드인 ${draw.card.nameKo} 카드를 ${
                draw.isReversed ? "역방향" : "정방향"
              }으로 뽑으셨습니다`
            : "카드 뽑기 버튼을 눌러 오늘의 카드를 뽑아보세요"
        }
      >
        {draw && (
          <Button
            text={"결과 보러 가기"}
            onClick={() => nav(`/explanation/${draw.card.id}`)}
          />
        )}
      </SpeechBubble>

      <Footer />
    </div>
  );
};

export default DailyTarot;
