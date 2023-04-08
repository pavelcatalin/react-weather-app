import humidity from "../../assets/icons/humidity.png";

const Highlights = () => {
  return (
    <section className="highlights">
      <h3>Today's highlights</h3>
      <div className="highlights-wrapper">
        <div className="highlight-card">
          <span className="title">Humidity</span>
          <div className="highlight-value">
            <img
              src={humidity}
              alt=""
              className="highlight-icon"
              width={"35px"}
            />
            <span className="value">82%</span>
          </div>
        </div>
        <div className="highlight-card">
          <span className="title">Humidity</span>
          <div className="highlight-value">
            <img
              src={humidity}
              alt=""
              className="highlight-icon"
              width={"35px"}
            />
            <span className="value">82%</span>
          </div>
        </div>
        <div className="highlight-card">
          <span className="title">Humidity</span>
          <div className="highlight-value">
            <img
              src={humidity}
              alt=""
              className="highlight-icon"
              width={"35px"}
            />
            <span className="value">82%</span>
          </div>
        </div>
        <div className="highlight-card">
          <span className="title">Humidity</span>
          <div className="highlight-value">
            <img
              src={humidity}
              alt=""
              className="highlight-icon"
              width={"35px"}
            />
            <span className="value">82%</span>
          </div>
        </div>
        <div className="highlight-card">
          <span className="title">Humidity</span>
          <div className="highlight-value">
            <img
              src={humidity}
              alt=""
              className="highlight-icon"
              width={"35px"}
            />
            <span className="value">82%</span>
          </div>
        </div>
        <div className="highlight-card">
          <span className="title">Humidity</span>
          <div className="highlight-value">
            <img
              src={humidity}
              alt=""
              className="highlight-icon"
              width={"35px"}
            />
            <span className="value">82%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
