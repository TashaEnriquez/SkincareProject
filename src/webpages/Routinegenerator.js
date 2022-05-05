import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import {
  Container,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

const RoutineGenerator = () => {
  const [skintype, setSkintype] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch(
        `http://localhost:5050/products/?recommendedFor=${skintype}`
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
    <Container>
      <Box>
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          Routine Generator
        </Typography>
      </Box>
      <Box>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Skintype</Typography>
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
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {products?.map((product) => (
          <Card key={product._id} sx={{ maxWidth: 345 }}>
            <Link to={`/products/${product._id}`}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.imageURL}
                  alt={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {product.name}
                  </Typography>
                  <Typography gutterBottom variant="h4">
                    {product.brand}
                  </Typography>
                  {product.ingredients?.map((ingredient) => (
                    <Typography gutterBottom variant="h4">
                      {ingredient.name}
                    </Typography>
                  ))}
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default RoutineGenerator;
