import '../styles/Hero.css';
import cleanser from '../images/cleanser.jpeg';
import moisturize from '../images/moisturize.jpeg';
import sunprotect from '../images/sunprotect.jpeg';
import toning from '../images/toning.jpeg';



const Hero = () => {
    return (
        <div className="hero-bg">

        <section className="hero" id="hero">
            
             <div className="left-content">
             <h3>Know it all with our Skincare guide</h3>
              <p>As the current world of skin care is extremely confusing, with Know It, you can start being mindful about your skin health.</p>
              <button className='signup-button'>Sign Up</button>
             </div>

             <div className="right-content">
             <div className='row-1'>
                  <img src = {cleanser } alt="skincare" style={{height:250, width:350 }}className='step-one'/>
             <img src={toning} alt="toning" style={{height:250, width:350}}
             className='step-two' />
             </div>
             <div className='row-2'>
                     <img src={moisturize} alt="moisturize" style={{height:250, width:350}}
                     className='step-three' />
             <img src={sunprotect} alt="protect" style={{height:250, width:350}}
             className='step-four' />
             </div>
            

             </div>

   </section>

</div>
 
    )
};

export default Hero;