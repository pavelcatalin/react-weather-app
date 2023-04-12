import { useEffect, useState } from "react";

import alternative from "../../assets/alternative.mp4";
import cloud from "../../assets/cloud.mp4";
import cloudy from "../../assets/cloudy.mp4";
import moon from "../../assets/moon.mp4";
import sun from "../../assets/sun.mp4";
import rain from "../../assets/rain.mp4";

const Theme = ({ weather }) => {
  const [theme, setTheme] = useState(sun);
  const isDay = Boolean(weather?.current?.is_day);
  const currentCondition = weather?.current?.condition?.text;

  useEffect(() => {
    if (currentCondition) {
      if (currentCondition === "Overcast") {
        setTheme(cloud);
      } else if (currentCondition.split(" ").includes("cloudy")) {
        setTheme(cloudy);
      } else if (currentCondition === "Sunny") {
        setTheme(sun);
      } else if (currentCondition.split(" ").includes("rain")) {
        setTheme(rain);
      } else if (currentCondition.split(" ").includes("sun")) {
        setTheme(sun);
      } else if (currentCondition.split(" ").includes("mist")) {
        setTheme(cloudy);
      } else {
        setTheme(alternative);
      }
    }
  }, [currentCondition]);
  return (
    <>
      <video
        autoPlay
        loop
        muted
        src={isDay ? theme : moon}
        type="video/mp4"
      ></video>
    </>
  );
};

export default Theme;
