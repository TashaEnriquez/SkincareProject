import { useState, useEffect } from "react";
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

const SkintypeFiltering = () => {
  const [skintype, setSkintype] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/products/?recommendedFor=${skintype}`
      );

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const products = await response.json();
      setProducts(products);
    }

    getProducts();

    return;
  }, [skintype]);

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon className="expandIcon" />}>
        <h3>Skintype</h3>
      </AccordionSummary>
      <AccordionDetails>
        <FormControl>
          <RadioGroup
            aria-labelledby="skintypes"
            name="skintype"
            defaultValue="all"
          >
            <FormControlLabel
              value="All"
              control={<Radio />}
              label="All"
              labelPlacement="start"
              onClick={() => {
                setSkintype("");
              }}
            />
            <FormControlLabel
              value="Oily"
              control={<Radio />}
              label="Oily"
              labelPlacement="start"
              onClick={() => {
                setSkintype("oily");
              }}
            />
            <FormControlLabel
              value="Dry"
              control={<Radio />}
              label="Dry"
              labelPlacement="start"
              onClick={() => {
                setSkintype("dry");
              }}
            />
            <FormControlLabel
              value="Combination"
              control={<Radio />}
              label="Combination"
              labelPlacement="start"
              onClick={() => {
                setSkintype("combination");
              }}
            />
            <FormControlLabel
              value="Normal"
              control={<Radio />}
              label="Normal"
              labelPlacement="start"
              onClick={() => {
                setSkintype("normal");
              }}
            />
          </RadioGroup>
        </FormControl>
      </AccordionDetails>
    </Accordion>
  );
};

export default SkintypeFiltering;
