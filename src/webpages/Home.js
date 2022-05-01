import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import Findyourskin from "../sections/Findyourskin";
import Generateroutine from "../sections/Generateroutine";
import Forum from "../sections/Forum";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import '../styles/Home.css';

const Home = () => {
    return(
        <div className="home-container">
        <Navbar />
        <Hero />
        <Findyourskin />
        <Generateroutine />
        <Forum />
        <About />
        <Contact />
        <Footer />
        </div>
    )
};
export default Home;