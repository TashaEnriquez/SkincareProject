import "../styles/Findyourskin.css";
import oilySkin from "../images/oilySkin.png";
import drySkin from "../images/drySkin.png";
import combinationSkin from "../images/combinationSkin.png";
import normalSkin from "../images/normalSkin.png";

const Findyourskin = () => {
  return (
    <div className="findyourskin-section">
      <div className="instructions">
        <h2>How to find your skintype</h2>
        <h4>Skintype refers to the hydration level of your face.</h4>
        <h4>
          Finding out your skintype helps you learn how to help your skin, so
          let's make it as simple as possible.
        </h4>
        <ol>
          <li>
            Use a gentle cleanser: foam it up in your hand and gently rub it
            accross your face for about 30-45 seconds before rinsing off and
            gently patt it dry with a towel.
          </li>
          <li>
            DO NOT moisturize your face, don't do anything with your skin at
            all, just let it rest for an hour (don't go outside or sun exposure
            because it will damage your skin, this is better to do at night).
          </li>
          <li>
            After the hour has passed, go to a mirror and closely examine your
            skin:
          </li>
        </ol>
      </div>
      <div className="results">
        <div className="skintype">
          <h3>Oily</h3>
          <img src={oilySkin} alt="oily face" />
          <p>
            If you notice a shininess (almost looking like you sweat a little
            bit), kind of reflectiveness (like you applied highlighter in your
            forehead and nose.
          </p>
        </div>
        <div className="skintype">
          <h3>Dry</h3>
          <img src={drySkin} alt="dry face" />
          <p>
            If you notice that your skin feels very thight and stripped almost
            like there's no hydration in your face, or you notice some
            fleakiness or a ton of tiny little lines whenever you make any
            facial expressions.on your skin.
          </p>
        </div>
        <div className="skintype">
          <h3>Combination</h3>
          <img src={combinationSkin} alt="combination face" />
          <p>
            If you notice that certain spots are really shiny while others feel
            very thight and stripped.
          </p>
        </div>
        <div className="skintype">
          <h3>Normal</h3>
          <img src={normalSkin} alt="normal face" />
          <p>
            If you don't notice any thightiness but you also don't notice any
            greasyness, your skin seems to feel and look fine... you're god's
            favorite
          </p>
        </div>
      </div>
    </div>
  );
};

export default Findyourskin;
