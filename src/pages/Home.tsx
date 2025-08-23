import { useEffect, useRef } from "react";
import "./Home.css";

const Home = () => {
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

  return <div className="home" ref={containerRef} />;
};

export default Home;
