import axios from "axios";
import { React, useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const MyRoutines = () => {
  /* useEffect(() => {
        axios.get('http://localhost:5050/routines/user/userId/routines')
        .then(response => {
            console.log('response from get request', response);
        })
        .catch(error => {
            console.log('error', error);
        })
    },[]); */

  const { user } = useAuth();

  return user ? (
    <ul>
      {user.routines.map((routine) => (
        <li
          key={routine._id}
          onClick={() =>
            console.log(
              `Send PUT request to /routines/user/${user._id}/routine/${routine._id}`
            )
          }
        >
          {routine.name}
        </li>
      ))}
    </ul>
  ) : (
    "Loading"
  );
};

export default MyRoutines;
