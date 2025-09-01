import Header from "../components/Header";
import Footer from "../components/Footer";
import usePageTitle from "../hooks/usePageTitle";
const ThemeTarot = () => {
  usePageTitle("Darcana - 테마 타로");
  return (
    <div className="ThemeTarot">
      <Header />
      <div>ThemeTarot</div>
      <Footer />
    </div>
  );
};

export default ThemeTarot;
