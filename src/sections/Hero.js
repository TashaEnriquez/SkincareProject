import '../styles/Hero.css';


const Hero = () => {
    return (
        <div className="hero-section">
             <section id = "#hero">
                <div className="hero-content">
                    <h1 className="hero-heading">Know it all with our Skincare guide</h1>
                    <p className="hero-paragraph">As the current world of skin care is extremely confusing, with Know It, you can start being mindful about your skin health. </p>
                    <button className="signup-button">Sign Up</button>
                </div>
                <div className="hero-images-or-video">
                    <iframe src="https://giphy.com/embed/y3BgHX0CThAUvlpzyN" width="400" height="500" frameBorder="0" title="skincare"></iframe>
                </div>
            </section>
        </div>
    )
};

export default Hero;