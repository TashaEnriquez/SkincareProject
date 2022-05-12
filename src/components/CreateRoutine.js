import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { TextField } from "@mui/material";
import "../styles/CreateRoutine.css";

const CreateNewRoutine = ({ productId }) => {
  const { user, setUser } = useAuth();
  const [form, setForm] = useState({
    name: "",
    products: productId,
  });
  const navigate = useNavigate();

  const updateForm = (value) => {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  };

  async function onSubmit(e) {
    e.preventDefault();
    const newRoutine = { ...form };

    await fetch(
      `${process.env.REACT_APP_API_URL}/routines/user/${user._id}/routines`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify(newRoutine),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setUser((prev) => ({ ...prev, routines: data }));
        navigate("/protected/myroutines");
      })
      .catch((error) => {
        window.alert(error);
        return;
      });
  }

  return (
    <div>
      <h3 className="routineh3">Or create a new routine!</h3>
      <form onSubmit={onSubmit}>
        <TextField
          className="innput"
          type="text"
          id="name"
          name="name"
          label="Name"
          size="small"
          margin="normal"
          value={form.name}
          onChange={(e) => updateForm({ name: e.target.value })}
        />
        {/* <label htmlFor="name" className="labelNameRoutine">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={form.name}
          onChange={(e) => updateForm({ name: e.target.value })}
        /> */}
        <input
          type="submit"
          value="Create routine"
          className="btn btn-primary routineButton"
        />
      </form>
    </div>
  );
};

export default CreateNewRoutine;
