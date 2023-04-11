import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Theme from "./components/Theme/Theme";
import { useSelector } from "react-redux";
import FavoriteLocations from "./components/FavoriteLocations/FavoriteLocations";

function App() {
  const isOpen = useSelector((state) => state.favorites.isOpen);
  const [weather, setWeather] = useState([]);
  const [searchedLocation, setSearchedLocation] = useState("");
  const [geolocation, setGeolocation] = useState({});
  const [currentCity, setCurrentCity] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setGeolocation(position.coords);
    });
  }, [searchedLocation]);

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

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=c6b8e2514ae044888d4195455230804&q=${
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
      <Theme isDay={weather?.current?.is_day} weather={weather} />
      <Header
        setSearchedLocation={setSearchedLocation}
        searchedLocation={searchedLocation}
      />
      {isOpen ? (
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
