import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

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
