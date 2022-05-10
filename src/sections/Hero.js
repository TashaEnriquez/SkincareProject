import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero-bg">
      <section className="hero" id="hero">
        <div className="left-content">
          <h3>Know it all with our Skincare guide</h3>
          <p>
            As the current world of skin care is extremely confusing, with Know
            It, you can start being mindful about your skin health.
          </p>
          <button className="signup-button">Sign Up</button>
        </div>

        <div className="right-content">
          {/* <div className="row-1">
            <img
              src={cleanser}
              alt="skincare"
              style={{ height: 250, width: 350 }}
              className="step-one"
            />
            <img
              src={toning}
              alt="toning"
              style={{ height: 250, width: 350 }}
              className="step-two"
            />
          </div>
          <div className="row-2">
            <img
              src={moisturize}
              alt="moisturize"
              style={{ height: 250, width: 350 }}
              className="step-three"
            />
            <img
              src={sunprotect}
              alt="protect"
              style={{ height: 250, width: 350 }}
              className="step-four"
            />
          </div> */}
          <div className="first-two">
            <div className="card-container-1">
              <div className="overlay">
                <div className="content-head">
                  <p>Cleansing means washing your face</p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="card-container-2">
              <div className="overlay">
                <div className="content-head">
                  <p>Moisturizing means hydrating the skin</p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
          <div className="second-two">
            <div className="card-container-3">
              <div className="overlay">
                <div className="content-head">
                  <p>Toning means balancing your skin</p>
                  <hr />
                </div>
              </div>
            </div>
            <div className="card-container-4">
              <div className="overlay">
                <div className="content-head">
                  <p>Protect your skin with Sunscreen</p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
