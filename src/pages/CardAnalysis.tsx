import Header from "../components/Header";
import Footer from "../components/Footer";
import usePageTitle from "../hooks/usePageTitle";
import CardContainer from "../components/CardContainer";
import "./CardAnalysis.css";
const CardAnalysis = () => {
  usePageTitle("Darcana - 카드 해석");
  return (
    <div className="CardAnalysis">
      <Header />
      <CardContainer />
      <Footer />
    </div>
  );
};

export default CardAnalysis;
