import { useEffect, useRef } from "react";
import "./Intro.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import TarotGirl from "./TarotGirl.tsx";
import SpeechBubble from "./SpeechBubble.tsx";
const Intro = () => {
  const nav = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current as HTMLDivElement;

    const W = container.clientWidth;

    function createSnow() {
      const el = document.createElement("div");
      el.className = "snow";
      el.style.left = Math.floor(Math.random() * W) + "px";
      el.style.top = "-12px";
      const size = 4 + Math.random() * 6;
      el.style.width = size + "px";
      el.style.height = size + "px";
      el.style.animationDuration = 6 + Math.random() * 6 + "s";
      el.style.animationDelay = Math.random() * 3 + "s";
      container.appendChild(el);
    }

    for (let i = 0; i < 50; i++) createSnow();

    return () => {
      container.querySelectorAll(".snow").forEach((n) => n.remove());
    };
  }, []);

  return (
    <div className="Intro" ref={containerRef}>
      <SpeechBubble
        bubbleId={1}
        text={"카드를 뽑고 오늘의 운세를 확인해 보세요 ✨"}
        children={
          <Button
            text={"카드 뽑으러 가기"}
            onClick={() => nav("/daily-tarot")}
          />
        }
      />
      <TarotGirl tarotgirlId={1} />
    </div>
  );
};

export default Intro;
