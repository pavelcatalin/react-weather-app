import React from "react";
import CurrentWeather from "../CurrentWeather";
import Forecast from "../Forecast/Forecast";
import Highlights from "../Highlights";
import FavoriteLocations from "../FavoriteLocations/FavoriteLocations";

const Main = ({ favorites }) => {
  console.log(favorites);
  return (
    <main>
      {favorites ? (
        <>
          <CurrentWeather />
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
