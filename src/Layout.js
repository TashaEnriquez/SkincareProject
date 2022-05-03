import { Outlet } from "react-router-dom";
import Footer from "./sections/Footer";
import NavBar from "./sections/Navbar";

const Layout = () => {
  return (
    <div>
        <NavBar />
        <Outlet />
    </div>
  );
};

export default Layout;
