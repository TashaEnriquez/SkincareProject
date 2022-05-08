import { Outlet } from "react-router-dom";
import Navbar from "./sections/Navbar.js";
import Footer from "./sections/Footer";

const Layout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Outlet />
       <Footer />
    </div>
  );
};

export default Layout;
