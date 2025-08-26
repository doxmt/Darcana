import "./App.css";
import DailyTarot from "./pages/DailyTarot";
import Home from "./pages/Home";
// import Button from "./components/Button";
import { Routes, Route } from "react-router-dom";
import ThemeTarot from "./pages/ThemeTarot";
import CardAnalysis from "./pages/CardAnalysis";
import Explanation from "./pages/Explanation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daily-tarot" element={<DailyTarot />} />
        <Route path="/theme-tarot" element={<ThemeTarot />} />
        <Route path="/card-analysis" element={<CardAnalysis />} />
        <Route path="/explanation/:id" element={<Explanation />} />
      </Routes>
    </>
  );
}

export default App;
