import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CreateNewRoutine = () => {
  const { user } = useAuth();
  const [form, setForm] = useState({
    name: "",
    product: "",
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

    await fetch(`http://localhost:5050/routines/user/${user._id}/routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(newRoutine),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    navigate("/protected/routinegenerator");
  }

  return (
    <div>
      <h3>New Routine</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={form.name}
          onChange={(e) => updateForm({ name: e.target.value })}
        />
        <input
          type="submit"
          value="Create product"
          className="btn btn-primary"
        />
      </form>
    </div>
  );
};

export default CreateNewRoutine;