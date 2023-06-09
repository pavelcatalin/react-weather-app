import { motion } from "framer-motion";

import "./forecast.scss";
import { useEffect, useState } from "react";

const Forecast = ({ weather }) => {
  const [selectedButton, setSelectedbutton] = useState(true);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [weekForecast, setWeekForecast] = useState([]);
  const localtime = weather.location?.localtime_epoch;

  const getHourlyForecast = () => {
    const dayForecast = [
      ...weather.forecast?.forecastday[0].hour,
      ...weather.forecast?.forecastday[1].hour,
    ];
    const hourlyData = dayForecast
      .filter((item) => item.time_epoch > localtime)
      .slice(0, 24);
    setHourlyForecast(hourlyData);
  };

  const getWeekForecast = () => {
    const transformDate = (date) => {
      const splittedDate = date.split("-");
      const newDate = `${splittedDate[0]},${Number(splittedDate[1])},${
        splittedDate[2]
      }`;
      const d = new Date(newDate);
      return d.toString().split(" ")[0];
    };

    const weekForecast = weather.forecast?.forecastday.map((item) => {
      return {
        day: transformDate(item.date),
        maxTemp: item.day.maxtemp_c.toFixed(),
        minTemp: item.day.mintemp_c.toFixed(),
        icon: item.day.condition.icon,
      };
    });

    setWeekForecast(weekForecast);
  };
  /* Get forecast */
  useEffect(() => {
    if (weather.forecast?.forecastday && selectedButton) {
      getHourlyForecast();
    }

    if (!selectedButton) {
      getWeekForecast();
    }
  }, [weather, selectedButton]);

  return (
    <section className="forecast">
      <div className="forecast-options">
        <button
          style={selectedButton ? { borderBottom: "1px solid white" } : {}}
          onClick={() => setSelectedbutton(true)}
        >
          24h
        </button>
        <button
          style={!selectedButton ? { borderBottom: "1px solid white" } : {}}
          onClick={() => setSelectedbutton(false)}
        >
          7days
        </button>
      </div>
      <div className="forecast-list">
        <div className="inner-forecast-list">
          {selectedButton
            ? hourlyForecast.map((item, index) => (
                <div key={index} className="forecast-card">
                  <span className="day">
                    {selectedButton ? item.time.split(" ")[1] : item.day}
                  </span>
                  <img
                    src={selectedButton ? item.condition.icon : item.icon}
                    alt=""
                    className="forecast-icon"
                    width={"30px"}
                  />
                  <div className="min-max-temp">
                    <span className="max-temp">
                      {selectedButton ? Math.round(item.temp_c) : item.maxTemp}
                      °C
                    </span>
                  </div>
                </div>
              ))
            : weekForecast.map((item, index) => (
                <div key={index} className="forecast-card">
                  <span className="day">
                    {selectedButton ? item.time.split(" ")[1] : item.day}
                  </span>
                  <img
                    src={selectedButton ? item.condition.icon : item.icon}
                    alt=""
                    className="forecast-icon"
                    width={"30px"}
                  />
                  <div className="min-max-temp">
                    <span className="max-temp">
                      {selectedButton ? Math.round(item.temp_c) : item.maxTemp}
                      °/
                    </span>

                    <span className="min-temp">{item.minTemp}°C</span>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Forecast;
