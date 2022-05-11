import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

const EditRoutine = ({ productId, routineId }) => {
  console.log("product", productId);
  console.log("routine", routineId);
  const [form, setForm] = useState({
    name: "",
    products: [""],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:5050/routines/`);

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        console.log(message);
        return;
      }

      const routine = await response.json();
      if (!routine) {
        window.alert(`Routine with id ${routine._id} not found`);
        navigate("/");
        return;
      }

      setForm(routine);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const editedRoutine = {
      name: form.name,
      product: form.products,
    };

    const res = await fetch(`http://localhost:5050/update/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(editedRoutine),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const updatedR = await res.json();
    console.log("updateed routune", updatedR);
    if (res.ok) {
      navigate("/");
    } else {
      console.log("Changes not made");
    }
  }

  return (
    <div>
      {/* <h3>Update Product</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Product:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={routines.products._id}
            onChange={(e) => updateForm({ product: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="brand">Routine:</label>
          <input
            type="text"
            className="form-control"
            id="routine"
            value={routines.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="nameOptions"
              id="categoryOilCleanser"
              value={routines.name}
              checked={routines.name}
              onChange={(e) => updateForm({ name: e.target.value })}
            />
            <label htmlFor="categoryOilCleanser" className="form-check-label">
              Oil Cleanser
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="categoryOptions"
              id="categoryCleanser"
              value={routines.name}
              checked={routines.name}
              onChange={(e) => updateForm({ name: e.target.value })}
            />
            <label htmlFor="categoryCleanser" className="form-check-label">
              Cleanser
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="categoryOptions"
              id="categorySunscreen"
              value={routines.name}
              checked={routines.name}
              onChange={(e) => updateForm({ name: e.target.value })}
            />
            <label htmlFor="categorySunscreen" className="form-check-label">
              Sunscreen
            </label>
          </div>
        </div>
        <br />
        <div className="form-group">
          <input
            type="submit"
            value="Update Product"
            className="btn btn-primary"
          />
        </div>
      </form> */}
    </div>
  );
};

export default EditRoutine;
