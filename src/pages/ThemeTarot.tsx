import Header from "../components/Header";
import Footer from "../components/Footer";
import usePageTitle from "../hooks/usePageTitle";
import Theme from "../components/ThemeTarot/Theme";
import Draw from "../components/ThemeTarot/Draw";
import { useState } from "react";
import Result from "../components/ThemeTarot/Result";
import { pickRandomCardAll } from "../util/pick-tarot-card";
import type { SimpleDrawResult } from "../util/pick-tarot-card";
const ThemeTarot = () => {
  const [pickCards, setPickCards] = useState<SimpleDrawResult[]>([]);

  const onPickThreeCard = () => {
    const results: SimpleDrawResult[] = [];
    const usedIds = new Set<number>();

    while (results.length < 3) {
      const card = pickRandomCardAll();
      if (!usedIds.has(card.card.id)) {
        usedIds.add(card.card.id);
        results.push({
          id: card.card.id,
          nameKo: card.card.nameKo,
          isReversed: card.isReversed,
        });
      }
    }
    setPickCards(results);
    console.log(results);
  };
  const [step, setStep] = useState(1);
  const [topic, setTopic] = useState("");

  <Theme onNext={() => setStep(2)} setTopic={setTopic} />;

  usePageTitle("Darcana - 테마 타로");
  return (
    <div className="ThemeTarot">
      <Header />
      {step === 1 && <Theme onNext={() => setStep(2)} setTopic={setTopic} />}
      {step === 2 && (
        <Draw
          onPickThreeCard={onPickThreeCard}
          pickCards={pickCards}
          onNext={() => setStep(3)}
        />
      )}
      {step === 3 && <Result pickCards={pickCards} topic={topic} />}

      <Footer />
    </div>
  );
};

export default ThemeTarot;
