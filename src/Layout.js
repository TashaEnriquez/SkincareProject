import { Outlet } from "react-router-dom";
import Navbar from "./sections/Navbar.js";

const Layout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
