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

const ConcernFiltering = () => {
  const [concern, setConcern] = useState("");

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon className="expandIcon" />}>
        <h3>Concern</h3>
      </AccordionSummary>
      <AccordionDetails>
        <FormControl>
          <RadioGroup
            aria-labelledby="concern"
            name="concern"
            defaultValue="none"
          >
            <FormControlLabel
              value="Acne"
              control={<Radio />}
              label="Acne"
              labelPlacement="start"
              onClick={() => {
                setConcern("Acne-Prone");
              }}
            />
            <FormControlLabel
              value="Aging"
              control={<Radio />}
              label="Aging"
              labelPlacement="start"
              onClick={() => {
                setConcern("Anti-Aging");
              }}
            />
            <FormControlLabel
              value="Blackheads"
              control={<Radio />}
              label="Blackheads"
              labelPlacement="start"
              onClick={() => {
                setConcern("Blackheads");
              }}
            />
            <FormControlLabel
              value="BumpySkin"
              control={<Radio />}
              label="Bumpy Skin"
              labelPlacement="start"
              onClick={() => {
                setConcern("Bumpy Skin");
              }}
            />
            <FormControlLabel
              value="DehydratedSkin"
              control={<Radio />}
              label="Dehydrated Skin"
              labelPlacement="start"
              onClick={() => {
                setConcern("Dehydrated Skin");
              }}
            />
            <FormControlLabel
              value="DullSkin"
              control={<Radio />}
              label="Dull Skin"
              labelPlacement="start"
              onClick={() => {
                setConcern("Dull Skin");
              }}
            />
            <FormControlLabel
              value="CloggedPores"
              control={<Radio />}
              label="Clogged Pores"
              labelPlacement="start"
              onClick={() => {
                setConcern("Clogged Pores");
              }}
            />
            <FormControlLabel
              value="OilControl"
              control={<Radio />}
              label="Oil Control"
              labelPlacement="start"
              onClick={() => {
                setConcern("Oil Control");
              }}
            />
          </RadioGroup>
        </FormControl>
      </AccordionDetails>
    </Accordion>
  );
};

export default ConcernFiltering;
