import logo from "../images/logo.png";
import "../styles/Home.css";
import { HiOutlineSearch } from "react-icons/hi";
const Home = () => {
    return(
        <div className="home-container">
            <nav className="top-nav">
            <img className = "brand-logo" src = {logo} style = {{height:150, width:200}} alt = "logo" />
                <ul className="nav-items">
                    <li className="routine-item">
                        <a href = "#routine-generator">Generate my routine</a>
                    </li>
                    <li className="search">
                          <div className="search-box">
                            <button className="search-button">
                                <HiOutlineSearch />
                            </button>
                            <input type="text" className="input-search" placeholder="Search..."/>
                          </div>
                    </li>
                    <li className="login">
                        <button className="login-button">Log In</button>
                    </li>
                    <li className="sign-up">
                        <button className="signup-button">Sign Up</button>
                    </li>
                </ul>
            </nav>
            <section id = "#home">
                <div className="home-content">
                    <h1 className="home-heading">Know it all with our Skincare guide</h1>
                    <p className="home-paragraph">As the current world of skin care is extremely confusing, with Know It, you can start being mindful about your skin health. </p>
                    <button className="signup-button">Sign Up</button>
                </div>
                <div className="home-images-or-video">
                    <iframe src="https://giphy.com/embed/y3BgHX0CThAUvlpzyN" width="400" height="500" frameBorder="0" title="skincare"></iframe>
                </div>
            </section>
        </div>
    )
};
export default Home;