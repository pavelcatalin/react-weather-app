import termomether from "../../assets/icons/thermometer.png";
import wind from "../../assets/icons/wind.png";

const CurrentWeather = () => {
  return (
    <section className="current-weather">
      <h2>Cluj Napoca</h2>
      <h4>Monday 16, Apr</h4>
      <div className="weather-icon">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png"
          alt=""
        />
      </div>
      <div className="weather-status">Partly Cloudy</div>
      <div className="current-temp">12°C</div>
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
            <span>8°C</span>
          </div>
        </div>
        <div className="wind">
          <span>
            <img src={wind} alt="termo" />
          </span>
          <div className="feels-like">
            <span>Wind</span>
            <span>24km/h</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
