import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MyRoutines = () => {
  const [routines, setRoutines] = useState([]);
  const { user } = useAuth();
  const [routineId, setRoutineId] = useState(" ");

  useEffect(() => {
    async function getRoutines() {
      const response = await fetch(
        `http://localhost:5050/routines/user/${user._id}/routines/${routineId}`,
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
  }, [routineId]);

  const productsMapping = (e) => {
    setRoutineId(e.target.value);
  };

  return (
    <div>
      <div>
        <h2>My Routines</h2>
      </div>
      <div className="mainSection">
        <div className="left">
          <Accordion>
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
                            onClick={productsMapping}
                          />
                        </div>
                      ))
                    : "No routines to show"}
                </RadioGroup>
              </FormControl>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="productsMapping">
          {routines.length
            ? routines.map((routine) => (
                <div>
                  {routine.products?.map((product) => (
                    <p>{product.name}</p>
                  ))}
                </div>
              ))
            : "This routine is empty"}
        </div>
      </div>
    </div>
  );
};

export default MyRoutines;
