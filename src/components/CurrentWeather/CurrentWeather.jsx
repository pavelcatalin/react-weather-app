import termomether from "../../assets/icons/thermometer.png";
import wind from "../../assets/icons/wind.png";

const CurrentWeather = ({ currentWeather }) => {
  return (
    <section className="current-weather">
      <h2>{currentWeather?.location?.name}</h2>

      <h4>Monday 16, Apr</h4>

      <div className="weather-icon">
        <img src={currentWeather?.current?.condition?.icon} alt="" />
      </div>

      <div className="weather-status">
        {currentWeather?.current?.condition?.text}
      </div>

      <div className="current-temp">{currentWeather?.current?.temp_c}°C</div>

      <div className="min-max-temp">
        <span className="max-temp">
          {currentWeather?.current?.temp_c >
          Math.round(currentWeather?.forecast?.forecastday[0].day.maxtemp_c)
            ? currentWeather?.current?.temp_c
            : Math.round(
                currentWeather?.forecast?.forecastday[0].day.maxtemp_c
              )}
          °C /{" "}
        </span>
        <span className="min-temp">
          {Math.round(currentWeather?.forecast?.forecastday[0].day.mintemp_c)}°C
        </span>
      </div>

      <div className="weather-details">
        <div className="feels-like-wrapper" title="Feels like">
          <span>
            <img src={termomether} alt="themometer-icon" />
          </span>
          <div className="feels-like">
            <span>Feels like</span>
            <span>{currentWeather?.current?.feelslike_c}°C</span>
          </div>
        </div>
        <div className="wind">
          <span>
            <img src={wind} alt="termo" />
          </span>
          <div className="feels-like">
            <span>Wind</span>
            <span>{currentWeather?.current?.wind_kph}km/h</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
