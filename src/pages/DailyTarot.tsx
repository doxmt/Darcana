import Header from "../components/Header";
import Footer from "../components/Footer";
import TarotCards from "../components/TarotCards";
import TarotGirl from "../components/TarotGirl";
import SpeechBubble from "../components/SpeechBubble";

const DailyTarot = () => {
  return (
    <div className="DailyTarot">
      <Header />
      <TarotCards />
      <TarotGirl tarotgirlId={2} />
      <SpeechBubble
        bubbleId={2}
        text={"카드 뽑기 버튼을 눌러 오늘의 카드를 뽑아보세요"}
      />
      <Footer />
    </div>
  );
};

export default DailyTarot;
