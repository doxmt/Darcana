import "./SearchBar.css";
import searchIcon from "../assets/SearchIcon.svg";
const SearchBar = () => {
  return (
    <div className="SearchBar">
      <img src={searchIcon} className="search-icon" />
      <input placeholder="카드 번호 또는 이름으로 검색..." />
    </div>
  );
};

export default SearchBar;
