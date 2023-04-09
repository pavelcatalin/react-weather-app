import Header from "./components/Header";
import Main from "./components/Main";
import cloudVideo from "./assets/cloudVideo.mp4";
import moon from "./assets/moon.mp4";
import moon1 from "./assets/moon1.mp4";
import moon2 from "./assets/moon2.mp4";
import moon3 from "./assets/moon3.mp4";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [favorites, setFavorites] = useState(true);
  const [data, setData] = useState();
  const [location, setLocation] = useState();

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=c6b8e2514ae044888d4195455230804&q=${location}&aqi=no`
      );
      const data = await response.json();
      setData(data);
    };

    fetchWeather();
  }, [location]);

  console.log(data?.location?.lon);
  return (
    <div className="app">
      <video
        autoPlay
        loop
        muted
        style={
          data?.current?.is_day ? { display: "none" } : { display: "flex" }
        }
      >
        <source src={moon3} type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        style={
          !data?.current?.is_day ? { display: "none" } : { display: "flex" }
        }
      >
        <source src={cloudVideo} type="video/mp4" />
      </video>
      <Header
        setFavorites={setFavorites}
        favorites={favorites}
        setLocation={setLocation}
      />
      <Main favorites={favorites} data={data} />
      <Footer />
    </div>
  );
}

export default App;
