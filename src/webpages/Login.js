import "../styles/Login.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../context/AuthContext";
import Loading from "../Loading";

const Login = () => {
  const [{ email, password }, setFormState] = useState({
    email: "",
    password: "",
  });
  const { isAuthenticated, loading, loginUser } = useAuth();

  const handleChange = (e) =>
    setFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return toast.error("Please fill all the fields");
    await loginUser({ email, password });
  };
  if (isAuthenticated) return <Navigate to="/" />;
  if (loading) return <Loading />;

  return (
    <div className="login-form">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="content">
          <div className="input-field">
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="action">
          <button className="login-page-sign-in">Sign in</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
