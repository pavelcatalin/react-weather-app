import cloudVideo from "../../assets/cloudVideo.mp4";
import moon from "../../assets/moon.mp4";
import moon1 from "../../assets/moon1.mp4";
import moon2 from "../../assets/moon2.mp4";
import moon3 from "../../assets/moon3.mp4";

const Theme = ({ isDay }) => {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        style={isDay ? { display: "none" } : { display: "flex" }}
      >
        <source src={cloudVideo} type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        style={!isDay ? { display: "none" } : { display: "flex" }}
      >
        <source src={cloudVideo} type="video/mp4" />
      </video>
    </>
  );
};

export default Theme;
