import { motion } from "framer-motion";

import "./forecast.scss";
import sun from "../../assets/icons/sun.png";
import { useState } from "react";

const Forecast = () => {
  const [selectedButton, setSelectedbutton] = useState(true);

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
      <motion.div className="forecast-list">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -1000 }}
          className="inner-forecast-list"
        >
          <motion.div className="forecast-card">
            <span className="day">Sun</span>
            <img src={sun} alt="" className="forecast-icon" width={"30px"} />
            <div className="min-max-temp">
              <span className="max-temp">15°</span>
              <span className="min-temp">-3°</span>
            </div>
          </motion.div>
          <motion.div className="forecast-card">
            <span className="day">Sun</span>
            <img src={sun} alt="" className="forecast-icon" width={"30px"} />
            <div className="min-max-temp">
              <span className="max-temp">15°</span>
              <span className="min-temp">-3°</span>
            </div>
          </motion.div>
          <motion.div className="forecast-card">
            <span className="day">Sun</span>
            <img src={sun} alt="" className="forecast-icon" width={"30px"} />
            <div className="min-max-temp">
              <span className="max-temp">15°</span>
              <span className="min-temp">-3°</span>
            </div>
          </motion.div>
          <motion.div className="forecast-card">
            <span className="day">Sun</span>
            <img src={sun} alt="" className="forecast-icon" width={"30px"} />
            <div className="min-max-temp">
              <span className="max-temp">15°</span>
              <span className="min-temp">-3°</span>
            </div>
          </motion.div>
          <motion.div className="forecast-card">
            <span className="day">Sun</span>
            <img src={sun} alt="" className="forecast-icon" width={"30px"} />
            <div className="min-max-temp">
              <span className="max-temp">15°</span>
              <span className="min-temp">-3°</span>
            </div>
          </motion.div>
          <motion.div className="forecast-card">
            <span className="day">Sun</span>
            <img src={sun} alt="" className="forecast-icon" width={"30px"} />
            <div className="min-max-temp">
              <span className="max-temp">15°</span>
              <span className="min-temp">-3°</span>
            </div>
          </motion.div>
          <motion.div className="forecast-card">
            <span className="day">Sun</span>
            <img src={sun} alt="" className="forecast-icon" width={"30px"} />
            <div className="min-max-temp">
              <span className="max-temp">15°</span>
              <span className="min-temp">-3°</span>
            </div>
          </motion.div>
          <motion.div className="forecast-card">
            <span className="day">Sun</span>
            <img src={sun} alt="" className="forecast-icon" width={"30px"} />
            <div className="min-max-temp">
              <span className="max-temp">15°</span>
              <span className="min-temp">-3°</span>
            </div>
          </motion.div>
          <motion.div className="forecast-card">
            <span className="day">Sun</span>
            <img src={sun} alt="" className="forecast-icon" width={"30px"} />
            <div className="min-max-temp">
              <span className="max-temp">15°</span>
              <span className="min-temp">-3°</span>
            </div>
          </motion.div>
          <motion.div className="forecast-card">
            <span className="day">Sun</span>
            <img src={sun} alt="" className="forecast-icon" width={"30px"} />
            <div className="min-max-temp">
              <span className="max-temp">15°</span>
              <span className="min-temp">-3°</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Forecast;
