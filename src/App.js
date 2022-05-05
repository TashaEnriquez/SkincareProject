import { Route, Routes } from "react-router-dom";
import Home from "./webpages/Home";
import Login from "./webpages/Login";
import Routinegenerator from "./webpages/Routinegenerator";
import MyRoutines from "./webpages/MyRoutines";
import Signup from "./webpages/Signup";
import Search from "./webpages/Search";
import Layout from "./Layout";
import NotFound from "./webpages/NotFound";
import AuthState from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <AuthState>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="protected" element={<ProtectedRoute />}>
            <Route path="search" element={<Search />} />
            <Route path="routinegenerator" element={<Routinegenerator />} />
            <Route path="myroutines" element={<MyRoutines />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthState>
  );
};

export default App;
