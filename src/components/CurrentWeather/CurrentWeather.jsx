import termomether from "../../assets/icons/thermometer.png";
import wind from "../../assets/icons/wind.png";

const CurrentWeather = ({ data }) => {
  return (
    <section className="current-weather">
      <h2>{data?.location?.name}</h2>
      <h4>Monday 16, Apr</h4>
      <div className="weather-icon">
        <img src={data?.current?.condition?.icon} alt="" />
      </div>
      <div className="weather-status">{data?.current?.condition?.text}</div>
      <div className="current-temp">{data?.current?.temp_c}°C</div>
      <div className="min-max-temp">
        <span className="max-temp">22°C / </span>
        <span className="min-temp">3°C</span>
      </div>

      <div className="weather-details">
        <div className="feels-like-wrapper" title="Feels like">
          <span>
            <img src={termomether} alt="termo" />
          </span>
          <div className="feels-like">
            <span>Feels like</span>
            <span>{data?.current?.feelslike_c}°C</span>
          </div>
        </div>
        <div className="wind">
          <span>
            <img src={wind} alt="termo" />
          </span>
          <div className="feels-like">
            <span>Wind</span>
            <span>{data?.current?.wind_kph}km/h</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
