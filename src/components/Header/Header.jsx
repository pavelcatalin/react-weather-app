import "./header.scss";

const Header = ({ setFavorites, favorites }) => {
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
