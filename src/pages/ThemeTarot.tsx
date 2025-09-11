import Header from "../components/Header";
import Footer from "../components/Footer";
import usePageTitle from "../hooks/usePageTitle";
import Theme from "../components/ThemeTarot/Theme";
import Draw from "../components/ThemeTarot/Draw";
import { useState } from "react";
import Result1 from "../components/ThemeTarot/Result1";
const ThemeTarot = () => {
  const [step, setStep] = useState(1);
  usePageTitle("Darcana - 테마 타로");
  return (
    <div className="ThemeTarot">
      <Header />
      {step === 1 && <Theme onNext={() => setStep(2)} />}
      {step === 2 && <Draw onNext={() => setStep(3)} />}
      {step === 3 && <Result1 onNext={() => setStep(3)} />}

      <Footer />
    </div>
  );
};

export default ThemeTarot;
