import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Theme from "./components/Theme/Theme";
import FavoriteLocations from "./components/FavoriteLocations";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { WEATHER_API_KEY } from "./utils/api";

function App() {
  const favoritesIsOpen = useSelector((state) => state.favorites.isOpen);
  const [weather, setWeather] = useState([]);
  const [searchedLocation, setSearchedLocation] = useState("");
  const [geolocation, setGeolocation] = useState({});
  const [currentCity, setCurrentCity] = useState("");

  /* Get geolocation */
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setGeolocation(position.coords);
    });
  }, [searchedLocation]);

  /* Get current city */
  useEffect(() => {
    const fetchCurrentCity = async () => {
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${geolocation?.latitude}&lon=${geolocation?.longitude}&format=json&apiKey=3700272628364397b501a4e56db3a6b9`
      );
      const data = await response.json();
      setCurrentCity(...data.results);
    };
    if (geolocation.latitude) {
      fetchCurrentCity();
    }
  }, [geolocation]);

  /* Fetch weather data */
  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${
          searchedLocation || currentCity.city
        }&days=7&aqi=yes&alerts=no`
      );
      const weatherData = await response.json();

      setWeather(weatherData);
    };

    if (currentCity.city) {
      fetchWeather();
    }
  }, [currentCity.city, searchedLocation]);

  return (
    <div className="app">
      <Theme weather={weather} />
      <Header
        setSearchedLocation={setSearchedLocation}
        searchedLocation={searchedLocation}
      />
      {favoritesIsOpen ? (
        <Main weather={weather} geolocation={geolocation} />
      ) : (
        <FavoriteLocations
          weather={weather}
          geolocation={geolocation}
          setSearchedLocation={setSearchedLocation}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
