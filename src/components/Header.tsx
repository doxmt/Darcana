import Logo from "../assets/Logo.png";
import Button from "./Button";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();

  return (
    <div className="Header">
      <div className="section_logo" onClick={() => nav("/")}>
        <img className="Logo" src={Logo} alt="Darcana 로고" />
        <p>Darcana</p>
      </div>
      <div className="section_menu">
        <ul>
          <li onClick={() => nav("/daily-tarot")}>오늘의 타로</li>
          <li onClick={() => nav("/theme-tarot")}>테마 타로</li>
          <li onClick={() => nav("/card-analysis")}>카드 해석</li>
        </ul>
      </div>
      <div className="section_user">
        <Button text={"로그인"} onClick={() => {}} />
      </div>
    </div>
  );
};

export default Header;
