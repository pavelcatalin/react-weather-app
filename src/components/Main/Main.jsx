import CurrentWeather from "../CurrentWeather";
import Forecast from "../Forecast/Forecast";
import Highlights from "../Highlights";
import FavoriteLocations from "../FavoriteLocations/FavoriteLocations";

const Main = ({ favorites, currentWeather }) => {
  return (
    <main>
      {favorites ? (
        <>
          <CurrentWeather currentWeather={currentWeather} />
          <Forecast />
          <Highlights />
        </>
      ) : (
        <FavoriteLocations />
      )}
    </main>
  );
};

export default Main;
