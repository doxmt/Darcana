import { useEffect, useRef } from "react";
import "./Intro.css";
import TarotGirl from "../assets/TarotGirl.png";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
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
      <div className="speech_bubble">
        <p className="bubble_text">
          카드를 뽑고 오늘의 운세를 확인해 보세요 ✨
        </p>
        <Button text={"카드 뽑으러 가기"} onClick={() => nav("/daily-tarot")} />
      </div>
      <img className="tarot_girl" src={TarotGirl} alt="타로 캐릭터" />
    </div>
  );
};

export default Intro;
