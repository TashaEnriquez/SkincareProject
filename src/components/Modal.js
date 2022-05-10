import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useAuth } from "../context/AuthContext";
import CreateNewRoutine from "./CreateRoutine.js";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddRoutineButton = () => {
  const {
    user: { routines },
  } = useAuth();
  const [open, setOpen] = React.useState(false);
  const handleClick = () => setOpen(!open);

  const routineList = () => {
    return routines?.map((routine) => {
      return <Button key={routine._id}>{routine.name}</Button>;
    });
  };

  console.log(routines);

  return (
    <div>
      <Button onClick={handleClick}>
        <AddCircleOutlineIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClick}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            My routines
          </Typography>
          <div>
            <CreateNewRoutine />
          </div>
          {/* <button>Create new routine</button> */}
        </Box>
      </Modal>
    </div>
  );
};

export default AddRoutineButton;
