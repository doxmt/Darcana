import "./Overlay.css";
import Button from "./Button";
import { useState } from "react";
import type { TarotCard } from "../data/AllArcana.tsx";
import { getCardImage } from "../util/get-card-image";

interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
  card: TarotCard | null;
}

const Overlay = ({ isOpen, onClose, card }: OverlayProps) => {
  const [activeBtn, setActiveBtn] = useState("정방향");
  const onclickBtn = (value: string) => {
    setActiveBtn(value);
  };
  if (!isOpen || !card) return null;

  return (
    <div className="Overlay">
      <div
        className="overlay-backdrop"
        onClick={() => {
          setActiveBtn("정방향");
          onClose();
        }}
      ></div>

      <div className="overlay-content">
        <button
          className="close-btn"
          onClick={() => {
            setActiveBtn("정방향");
            onClose();
          }}
        >
          ×
        </button>

        <div className="overlay-body">
          <div className="overlay-left">
            <img
              className={`card-image ${
                activeBtn === "정방향" ? "" : "reversed"
              }`}
              src={getCardImage(card.id)}
              alt="카드 이미지"
            />
          </div>

          <div className="overlay-right">
            <div className="overlay-toggle">
              <Button
                text="정방향"
                onClick={() => onclickBtn("정방향")}
                isActive={activeBtn === "정방향"}
              />
              <Button
                text="역방향"
                onClick={() => onclickBtn("역방향")}
                isActive={activeBtn === "역방향"}
              />
            </div>
            <div className="card-title">
              <h2>
                {card.id}.{card.nameKo}({card.nameEn})
              </h2>
            </div>

            <div className="overlay-section">
              <h4>키워드</h4>
              <p>
                {activeBtn === "정방향"
                  ? card.keywordsUpright.join(", ")
                  : card.keywordsReversed.join(", ")}
              </p>
            </div>

            <div className="overlay-section">
              <h4>의미</h4>
              <p>
                {activeBtn === "정방향" ? card.descUpright : card.descReversed}
              </p>
            </div>

            <div className="overlay-section">
              <h4>오늘의 운세</h4>
              <p>
                {activeBtn === "정방향"
                  ? card.fortuneUpright
                  : card.fortuneReversed}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
