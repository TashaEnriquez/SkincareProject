import "../styles/Footer.css";
import 'remixicon/fonts/remixicon.css';


const Footer = () => {
  return <div className="footer-section">
    <h3>Know It Skincare Guide</h3>
    <p>Lorem ipsum dolor sit amet. Et itaque voluptatum ab molestiae pariatur et omnis expedita non numquam quod! Et voluptas repellendus qui voluptatem quaerat hic reiciendis veniam id doloribus soluta et maiores consequatur</p>
       <div class="icons-wrapper">
        <i class="ri-facebook-circle-line icon"></i>
         <i class="ri-instagram-line icon"></i>
        <i class="ri-linkedin-line icon"></i>
    </div>
 <div class="footer-bottom">
   <p>copyright &copy;2021 <a href="#">Know It</a>  </p>
   <div class="footer-menu">
 <ul class="f-menu">
    <li><a href="">Home</a></li>
    <li><a href="">About</a></li>
    <li><a href="">Contact</a></li>
    <li><a href="">Blog</a></li>
 </ul>
</div>
</div>

  </div>;
};

export default Footer;
