import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import debounce from "lodash.debounce";
import { useState, useEffect } from "react";

import "./header.scss";
import searchIcon from "../../assets/icons/searchIcon.png";
import love from "../../assets/icons/love.png";
import back from "../../assets/icons/back.png";
import home from "../../assets/icons/home.png";
import { useDispatch, useSelector } from "react-redux";
import { isOpen } from "../../utils/redux/slices/favorites";

const suggestionUrl =
  "https://api.weatherapi.com/v1/search.json?key=c6b8e2514ae044888d4195455230804&q=";

const Header = ({ setSearchedLocation }) => {
  const favoritesIsOpen = useSelector((state) => state.favorites.isOpen);
  const dispatch = useDispatch();
  const [openSearch, setOpenSearch] = useState(false);
  const [city, setCity] = useState("");
  const [citySuggestion, setCitySuggestion] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      const response = await fetch(`${suggestionUrl}${city}`);
      const data = await response.json();

      setCitySuggestion(data);
    };
    const fetchDebounce = debounce(fetchSuggestions, 1000);

    if (city.length > 2) {
      fetchDebounce();
    } else {
      setCitySuggestion([]);
    }
  }, [city]);

  const handleSearchChange = (e) => {
    setCity(e.target.value);
  };

  const handleClick = (clickedItem) => {
    setSearchedLocation(clickedItem);
    setCitySuggestion([]);
    setCity([]);
    setOpenSearch(false);
  };

  openSearch ? disableBodyScroll(document) : enableBodyScroll(document);

  return (
    <div className={`header-wrapper ${openSearch ? "mobile-search" : ""}`}>
      <header>
        <h1>Weather {favoritesIsOpen ? "Dashboard" : "Favorites"}</h1>

        <div
          className="search-wrapper"
          style={favoritesIsOpen ? { display: "flex" } : { display: "none" }}
        >
          <span className="back-icon">
            <img
              src={back}
              alt="back-icon"
              width={"30px"}
              onClick={() => setOpenSearch(!openSearch)}
            />
          </span>

          <input
            type="text"
            name="search"
            className="search-location"
            placeholder="Search location"
            value={city}
            onChange={handleSearchChange}
          />

          <div className={citySuggestion.length ? "suggestions-wrapper" : ""}>
            {citySuggestion &&
              citySuggestion.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="suggestion"
                    onClick={() => handleClick(`${item.name},${item.country}`)}
                  >
                    {item.name}, {item.country}
                  </div>
                );
              })}
          </div>
          <button className="search-icon">
            <img
              src={searchIcon}
              alt=""
              width="30px"
              onClick={() => setOpenSearch(!openSearch)}
            />
          </button>
        </div>

        <nav className="favorite-locations">
          <button className="favorites" onClick={() => dispatch(isOpen())}>
            {favoritesIsOpen ? "Favorites" : "Dashboard"}
          </button>
          <button className="favorites-icon" onClick={() => dispatch(isOpen())}>
            {favoritesIsOpen ? (
              <img src={love} alt="" width="35px" />
            ) : (
              <img src={home} alt="" width="35px" />
            )}
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
