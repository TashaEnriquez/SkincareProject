import "../styles/About.css";
import logo from "../images/logo.png";

const About = () => {
  return (
    <div className="about-section">
      <h2 className="abouth2">About Us</h2>
      <div className="about-content">
        <div className="name">
          <h3 className="nameh3">Bahulya</h3>
        </div>
        <div className="logo">
          <img src={logo} className="logoImg" alt="logo" />
        </div>
        <div className="name">
          <h3 className="nameh3">Natasha</h3>
        </div>
      </div>
    </div>
  );
};

export default About;
