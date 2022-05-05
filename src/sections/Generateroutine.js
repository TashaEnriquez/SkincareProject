import { Link } from "react-router-dom";
import "../styles/Generateroutine.css";

const Generateroutine = () => {
  return (
    <div className="generateroutine-section">
      <button className="generateRoutineButton">
        <Link to="routinegenerator">Generate My Routine</Link>
      </button>
    </div>
  );
};

export default Generateroutine;
