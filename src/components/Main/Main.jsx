import CurrentWeather from "../CurrentWeather";
import Forecast from "../Forecast/Forecast";
import Highlights from "../Highlights";
import FavoriteLocations from "../FavoriteLocations/FavoriteLocations";

const Main = ({ favorites, weather, geolocation }) => {
  return (
    <main>
      {favorites ? (
        <>
          <CurrentWeather weather={weather} geolocation={geolocation} />
          <Forecast weather={weather} />
          <Highlights weather={weather} />
        </>
      ) : (
        <FavoriteLocations />
      )}
    </main>
  );
};

export default Main;
