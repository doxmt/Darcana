import Header from "../components/Header";
import TarotExplanation from "../components/TarotExplanation";
import Footer from "../components/Footer";
import TarotGirl from "../components/TarotGirl";
import usePageTitle from "../hooks/usePageTitle";
const Explanation = () => {
  usePageTitle("Darcana - 타로 해석");
  return (
    <div className="Explanation">
      <Header />
      <TarotGirl tarotgirlId={3} />
      <TarotExplanation />
      <Footer />
    </div>
  );
};

export default Explanation;
