import Header from "./components/Header";
import Main from "./components/Main";
import cloudVideo from "./assets/cloudVideo.mp4";
import moon from "./assets/moon.mp4";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [favorites, setFavorites] = useState(true);
  console.log(favorites);

  return (
    <div className="app">
      <video autoPlay loop muted>
        <source src={cloudVideo} type="video/mp4" />
      </video>
      <Header setFavorites={setFavorites} favorites={favorites} />
      <Main favorites={favorites} />
      <Footer />
    </div>
  );
}

export default App;
