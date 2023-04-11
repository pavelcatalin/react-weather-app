import CurrentWeather from "../CurrentWeather";
import Forecast from "../Forecast/Forecast";
import Highlights from "../Highlights";

const Main = ({ favorites, weather, geolocation }) => {
  return (
    <main>
      <CurrentWeather weather={weather} geolocation={geolocation} />
      <Forecast weather={weather} />
      <Highlights weather={weather} />
    </main>
  );
};

export default Main;
