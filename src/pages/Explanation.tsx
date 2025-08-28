import Header from "../components/Header";
import TarotExplanation from "../components/TarotExplanation";
import Footer from "../components/Footer";
import TarotGirl from "../components/TarotGirl";
const Explanation = () => {
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
