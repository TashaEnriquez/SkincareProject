import "../styles/Signup.css";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../Loading";

const Signup = () => {
  const [{ name, email, password }, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { isAuthenticated, loading, registerUser } = useAuth();

  const handleChange = (e) =>
    setFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password)
      return toast.error("Please fill all the fields");
    await registerUser({ name, email, password });
  };
  if (isAuthenticated) return <Navigate to="/" />;
  if (loading) return <Loading />;

  return (
    <div className="signup-form">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="content">
          <div className="input-field">
            <input
              type="text"
              placeholder="Name"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
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
          <button className="signup-page-signup">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
