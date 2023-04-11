import "./favoriteLocations.scss";
import close from "../../assets/icons/close.png";

import { useDispatch, useSelector } from "react-redux";
import {
  removeFromFavorites,
  isOpen,
} from "../../utils/redux/slices/favorites";

const FavoriteLocations = ({ weather, geolocation, setSearchedLocation }) => {
  const favorites = useSelector((state) => state.favorites.values);
  const dispatch = useDispatch();

  const handleClickFavorite = (city, country) => {
    const locationToString = `${city},${country}`;
    setSearchedLocation(locationToString);
    dispatch(isOpen());
  };

  return (
    <section className="favorite-locations-wrapper">
      {favorites.length ? (
        favorites.map((item, index) => (
          <div
            key={index}
            className="favorite-wrapper"
            onClick={() => handleClickFavorite(item.city, item.country)}
          >
            <h2>{item.city}</h2>

            <div className="current-condition">
              <span>{item.currentTemperature}°C</span>
              <span>{item.currentCondition}</span>
            </div>
            <span
              className="close-button"
              onClick={() =>
                dispatch(
                  removeFromFavorites({
                    city: item.city,
                    country: item.country,
                  })
                )
              }
            >
              <img src={close} alt="close-button" />
            </span>
          </div>
        ))
      ) : (
        <div className="empty-list">
          <p>
            Your list is empty. Please go to the dashboard and add favorites.
          </p>
        </div>
      )}
    </section>
  );
};

export default FavoriteLocations;
