import humidity from "../../assets/icons/humidity.png";
import wind from "../../assets/icons/wind.png";
import airQuality from "../../assets/icons/airQuality.png";
import uv from "../../assets/icons/uv.png";
import visibility from "../../assets/icons/visibility.png";
import pressure from "../../assets/icons/pressure.png";

const Highlights = ({ weather }) => {
  return (
    <section className="highlights">
      <h3>Today's highlights</h3>
      <div className="highlights-wrapper">
        <div className="highlight-card">
          <span className="title">Wind</span>
          <div className="highlight-value">
            <img src={wind} alt="" className="highlight-icon" width={"35px"} />
            <span className="value">{weather?.current?.wind_kph}kph</span>
          </div>
        </div>
        <div className="highlight-card">
          <span className="title">Humidity</span>
          <div className="highlight-value">
            <img
              src={humidity}
              alt=""
              className="highlight-icon"
              width={"35px"}
            />
            <span className="value">{weather?.current?.humidity}%</span>
          </div>
        </div>
        <div className="highlight-card">
          <span className="title">Air quality</span>
          <div className="highlight-value">
            <img
              src={airQuality}
              alt=""
              className="highlight-icon"
              width={"35px"}
            />
            <span className="value">
              {weather?.current?.air_quality["gb-defra-index"] > 5
                ? "Bad"
                : "Good"}
            </span>
          </div>
        </div>
        <div className="highlight-card">
          <span className="title">UV Index</span>
          <div className="highlight-value">
            <img src={uv} alt="" className="highlight-icon" width={"35px"} />
            <span className="value">{weather?.current?.uv}</span>
          </div>
        </div>
        <div className="highlight-card">
          <span className="title">Visibility</span>
          <div className="highlight-value">
            <img
              src={visibility}
              alt=""
              className="highlight-icon"
              width={"35px"}
            />
            <span className="value">{weather?.current?.vis_km}km</span>
          </div>
        </div>
        <div className="highlight-card">
          <span className="title">Pressure </span>
          <div className="highlight-value">
            <img
              src={pressure}
              alt=""
              className="highlight-icon"
              width={"35px"}
            />
            <span className="value">{weather?.current?.pressure_mb}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
