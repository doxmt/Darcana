import Logo from "../assets/Logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="section_logo">
        <img className="Logo" src={Logo} alt="Darcana 로고" />
        <p>Darcana</p>
      </div>
      <div className="section_menu">
        <ul>
          <li>오늘의 타로</li>
          <li>테마 타로</li>
          <li>카드 해석</li>
        </ul>
      </div>
      <div className="section_user">
        <button>로그인</button>
      </div>
    </div>
  );
};

export default Header;
