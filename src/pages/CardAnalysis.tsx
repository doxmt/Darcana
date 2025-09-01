import Header from "../components/Header";
import Footer from "../components/Footer";
import usePageTitle from "../hooks/usePageTitle";
const CardAnalysis = () => {
  usePageTitle("Darcana - 카드 해석");
  return (
    <div className="CardAnalysis">
      <Header />
      <div>CardAnalysis</div>
      <Footer />
    </div>
  );
};

export default CardAnalysis;
