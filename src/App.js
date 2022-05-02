import { Route, Routes } from "react-router-dom";
import Home from "./webpages/Home";
import Login from "./webpages/Login";
import Routinegenerator from "./webpages/Routinegenerator";
import Signup from "./webpages/Signup";
import Layout from "./Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="routinegenerator" element={<Routinegenerator />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
