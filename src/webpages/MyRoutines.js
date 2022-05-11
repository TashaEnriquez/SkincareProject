import { useState, useEffect } from "react";
import "../styles/MyRoutine.css";
import { useAuth } from "../context/AuthContext";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

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
        <div className="routinesByType">
          {user.routines.length
            ? user.routines.map((routine) => (
                <div key={routine._id}>
                  <div className="categoryDivision">
                    <h3 className="categoryTitle">
                      {routine.name}{" "}
                      <DeleteForeverOutlinedIcon
                        onClick={() => deleteRoutine(routine._id)}
                      />
                    </h3>
                  </div>
                  <div className="cardContent">
                    <div>
                      {routine.products?.map((product) => (
                        <p>{product.name}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            : "No product matches your search"}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>
        <h2>My Routines</h2>
      </div>
      <RoutineTypes />
      {/*    <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="expandIcon" />}
            >
              <h3>Routines</h3>
            </AccordionSummary>
            <AccordionDetails>
              <FormControl>
                <RadioGroup
                  aria-labelledby="routines"
                  name="routine"
                  defaultValue=""
                >
                  {routines.length
                    ? routines.map((routine) => (
                        <div>
                          <FormControlLabel
                            value={routine._id}
                            control={<Radio />}
                            label={routine.name}
                            labelPlacement="start"
                            onClick={handleClick}
                          />
                        </div>
                      ))
                    : "No routines to show"}
                </RadioGroup>
              </FormControl>
            </AccordionDetails>
          </Accordion> */}

      {/*  <div className="productsMapping">
        <RoutineTypes routines={amroutine} name="AM Routine" />
        <RoutineTypes routines={pmroutine} name="PM Routine" />
        </div>*/}
    </div>
  );
};

export default MyRoutines;
