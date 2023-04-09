import React from "react";
import CurrentWeather from "../CurrentWeather";
import Forecast from "../Forecast/Forecast";
import Highlights from "../Highlights";
import FavoriteLocations from "../FavoriteLocations/FavoriteLocations";

const Main = ({ favorites, data }) => {
  return (
    <main>
      {favorites ? (
        <>
          <CurrentWeather data={data} />
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
