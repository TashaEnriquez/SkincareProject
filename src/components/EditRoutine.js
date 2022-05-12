import React, { useState } from "react";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import { useAuth } from "../context/AuthContext";

const EditRoutine = ({ routine, productId }) => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const updateRoutine = async (e) => {
    const editedRoutine = {
      ...routine,
      products: [...routine.products, productId],
    };
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/routines/user/${user._id}/routines/${routine._id}`,
      {
        method: "PUT",
        body: JSON.stringify(editedRoutine),
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      }
    );
    const updatedR = await res.json();
    if (res.ok) {
      setUser((prev) => ({ ...prev, routines: updatedR }));
      navigate("/protected/myroutines");
    } else {
      console.log("Changes not made");
    }
  };

  return (
    <div className="routineDisplay">
      <Button key={routine._id} onClick={updateRoutine}>
        {routine.name}
      </Button>
    </div>
  );
};

export default EditRoutine;
