import { useState, useEffect } from "react";
import "../styles/MyRoutine.css";
import { useAuth } from "../context/AuthContext";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const MyRoutines = () => {
  const [routines, setRoutines] = useState([]);
  const { user } = useAuth();
  /* const [routineId, setRoutineId] = useState(" ");

  const handleClick = (e) => {
    setRoutineId((prev) => ({ ...prev, name: e.target.value }));
  }; */

  useEffect(() => {
    async function getRoutines() {
      const response = await fetch(
        `http://localhost:5050/routines/user/${user._id}/routines`,
        {
          method: "GET",
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const routines = await response.json();
      setRoutines(routines);
    }

    getRoutines();

    return;
  }, []);

  /* // Delete a product

  async function deleteRoutine() {
    await fetch(
      `http://localhost:5050/routines/user/${user._id}/routines/${user.routines._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    const newRoutines = routines.filter((el) => el._id !== id);
    setRoutines(newRoutines);
  } */

  /* const amroutine = routines.filter((item) => item.name === "AM Routine");
  const pmroutine = routines.filter((item) => item.name === "PM Routine"); */

  /*  const productsMapping = (e) => {
    setRoutines(e.target.value);
  }; */

  const RoutineTypes = (/* { routines, name } */) => {
    return (
      <div className="mainMapping">
        <div className="routinesByType">
          {routines.length
            ? routines.map((routine) => (
                <div key={routine._id}>
                  <div className="categoryDivision">
                    <h3 className="categoryTitle">
                      {routine.name}{" "}
                      <DeleteForeverOutlinedIcon /* onClick={deleteRoutine} */
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
