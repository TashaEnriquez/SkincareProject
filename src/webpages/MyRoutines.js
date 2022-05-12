import { useState, useEffect } from "react";
import "../styles/MyRoutine.css";
import { useAuth } from "../context/AuthContext";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

const MyRoutines = () => {
  const [routines, setRoutines] = useState([]);
  const { user, setUser } = useAuth();

  const deleteRoutine = async (routineId) => {
    await fetch(
      `${process.env.REACT_APP_API_URL}/routines/user/${user._id}/routines/${routineId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setUser((prev) => ({ ...prev, routines: data })))
      .catch((err) => console.error(err));
  };

  const RoutineTypes = () => {
    return (
      <div className="mainMapping">
        {user.routines.length
          ? user.routines.map((routine) => (
              <div key={routine._id} className="pleaseWork">
                <div className="categoryDivision">
                  <h3 className="categoryTitle">{routine.name}</h3>
                  <DeleteForeverOutlinedIcon
                    onClick={() => deleteRoutine(routine._id)}
                  />
                </div>
                <div className="productsMapping">
                  {routine.products.map((product) => (
                    <div>
                      <Card
                        key={product._id}
                        sx={{ maxWidth: 345, margin: "0.5rem" }}
                      >
                        <CardActionArea>
                          <Link to={`/products/${product._id}`}>
                            <CardMedia
                              component="img"
                              height="200"
                              image={product.imageURL}
                              alt={product.name}
                            />
                          </Link>
                          <CardContent>
                            <h5>{product.name}</h5>
                            <h4 className="routineh4">{product.brand}</h4>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            ))
          : "No product matches your search"}
      </div>
    );
  };

  return (
    <div>
      <div>
        <h2 className="myRoutinesh2">My Routines</h2>
      </div>
      <RoutineTypes />
    </div>
  );
};

export default MyRoutines;
