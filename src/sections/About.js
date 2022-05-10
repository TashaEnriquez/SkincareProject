import "../styles/About.css";
import bahulya from "../images/bahulya.png";
import logo from "../images/logo.png";
const About = () => {
  return (
    <div className="about-section">
      <h2>About Us</h2>
      <div className="about-content">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src={bahulya}
                alt={bahulya}
                style={{ width: 220, height: 250 }}
              />
            </div>
            <div class="flip-card-back">
              <h1>Krupa Bahulya</h1>
              <p>Full Stack web & app Developer</p>
            </div>
          </div>
        </div>
        <img src={logo} alt={logo} style={{ height: 200, width: 200 }} />
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src={bahulya}
                alt={bahulya}
                style={{ width: 220, height: 250 }}
              />
            </div>
            <div class="flip-card-back">
              <h1>Krupa Bahulya</h1>
              <p>Full Stack web & app Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
