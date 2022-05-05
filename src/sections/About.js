import "../styles/About.css";
import logo from "../images/logo.png";

const About = () => {
  return (
    <div className="about-section">
      <div className="us">
        <h2>Bahulya</h2>
      </div>
      <div className="picture">
        <img src={logo} />
      </div>
      <div className="us">
        <h2>Tasha</h2>
      </div>
    </div>
  );
};

export default About;
