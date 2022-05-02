import { Outlet } from "react-router-dom";
import Footer from "./sections/Footer";
import NavBar from "./sections/Navbar";

const Layout = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
