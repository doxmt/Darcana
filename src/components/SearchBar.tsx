import "./SearchBar.css";
import searchIcon from "../assets/SearchIcon.svg";

export type SearchBarProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="SearchBar">
      <img src={searchIcon} className="search-icon" />
      <input
        type="text"
        placeholder="카드 번호 또는 이름으로 검색..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
