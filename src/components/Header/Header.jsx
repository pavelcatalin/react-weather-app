import "./header.scss";

import debounce from "lodash.debounce";

const Header = ({ setFavorites, favorites, setLocation }) => {
  const handeleSearchChange = (e) => {
    setLocation(e.target.value);
  };
  const debounceOnChange = debounce(handeleSearchChange, 2000);
  return (
    <div className="header-wrapper">
      <header>
        <h1>Weather Dashboard</h1>
        <div className="search-wrapper">
          <input
            type="text"
            name="search"
            className="search-location"
            placeholder="Search location"
            onChange={debounceOnChange}
          />
        </div>
        <div className="favorite-locations">
          <button
            className="favorites"
            onClick={() => setFavorites(!favorites)}
          >
            Favorite locations
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
