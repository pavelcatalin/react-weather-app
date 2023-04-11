import termomether from "../../assets/icons/thermometer.png";
import rain from "../../assets/icons/rain.png";
import currentLocation from "../../assets/icons/currentLocation.png";
import addToFavoritesIcon from "../../assets/icons/addToFavoritesIcon.png";
import removeFromFavoritesIcon from "../../assets/icons/removeFromFavoritesIcon.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../utils/redux/slices/favorites";

const CurrentWeather = ({ weather, geolocation }) => {
  const favorites = useSelector((state) => state.favorites.values);
  const dispatch = useDispatch();
  const [isCurrentPosition, setIsCurrentPosition] = useState(false);
  const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  const month = d.toString().split(" ")[1];
  let dayNumber = d.toString().split(" ")[2];
  let day = weekday[d.getDay()];

  /* Verify if the current location is the same with the search location */
  useEffect(() => {
    if (geolocation.latitude) {
      if (weather?.location?.lat.toFixed() === geolocation.latitude.toFixed()) {
        setIsCurrentPosition(true);
      } else {
        setIsCurrentPosition(false);
      }
    }
  }, [weather, geolocation]);

  const handleAddToFavorites = () => {
    dispatch(
      addToFavorites({
        city: weather.location.name,
        country: weather.location.country,
        currentTemperature: weather.current.temp_c,
        currentCondition: weather.current.condition.text,
      })
    );
    setIsAddedToFavorites(!isAddedToFavorites);
  };

  const handleRemoveFromFavorites = () => {
    dispatch(
      removeFromFavorites({
        city: weather.location.name,
        country: weather.location.country,
      })
    );
    setIsAddedToFavorites(!isAddedToFavorites);
  };

  useEffect(() => {
    const checkLocationStatus = () => {
      const status = favorites.filter((item) => {
        if (
          item.country == weather.location?.country &&
          item.city == weather.location?.name
        ) {
          return item;
        }
      });
      if (!status.length) {
        setIsAddedToFavorites(false);
      } else {
        setIsAddedToFavorites(true);
      }
    };
    checkLocationStatus();
  }, [weather.location?.name, weather.location?.country]);

  console.log(weather);
  return (
    <section className="current-weather">
      <span className="add-to-favorites">
        {isAddedToFavorites ? (
          <img
            src={removeFromFavoritesIcon}
            alt=""
            onClick={handleRemoveFromFavorites}
          />
        ) : (
          <img src={addToFavoritesIcon} alt="" onClick={handleAddToFavorites} />
        )}
      </span>
      <h2>
        {weather?.location?.name}

        {isCurrentPosition && (
          <img src={currentLocation} alt="current-position" />
        )}
      </h2>

      <h4>{`${day} ${dayNumber}, ${month} `} </h4>
      <h5>Localtime: {weather?.location?.localtime.split(" ")[1]}</h5>

      <div className="weather-icon">
        {weather?.current?.condition?.icon && (
          <img src={weather?.current?.condition?.icon} alt="" />
        )}
      </div>

      <div className="weather-status">{weather?.current?.condition?.text}</div>

      <div className="current-temp">{weather?.current?.temp_c}°C</div>

      <div className="min-max-temp">
        <span className="max-temp">
          {weather?.current?.temp_c >
          Math.round(weather?.forecast?.forecastday[0].day.maxtemp_c)
            ? weather?.current?.temp_c
            : Math.round(weather?.forecast?.forecastday[0].day.maxtemp_c)}
          °C /{" "}
        </span>
        <span className="min-temp">
          {Math.round(weather?.forecast?.forecastday[0].day.mintemp_c)}°C
        </span>
      </div>

      <div className="weather-details">
        <div className="feels-like-wrapper" title="Feels like">
          <span>
            <img src={termomether} alt="themometer-icon" />
          </span>
          <div className="feels-like">
            <span>Feels like</span>
            <span>{weather?.current?.feelslike_c}°C</span>
          </div>
        </div>
        <div className="wind">
          <span>
            <img src={rain} alt="termo" />
          </span>
          <div className="feels-like">
            <span>Rain</span>
            <span>
              {weather?.forecast?.forecastday[0].day.daily_chance_of_rain}%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
