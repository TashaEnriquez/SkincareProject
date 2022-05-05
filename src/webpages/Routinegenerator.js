import { useState, useEffect } from "react";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import "../styles/RoutineGenerator.css";
import ConcernFiltering from "../components/ConcernFiltering";
import IngredientFiltering from "../components/IngredientFiltering";
import NoGoFiltering from "../components/NoGoFiltering";
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

const RoutineGenerator = () => {
  const [filter, setFilter] = useState({
    category: null,
    recommendedFor: null,
  });
  const [products, setProducts] = useState([]);

  const handleClick = (e) => {
    setFilter((prev) => ({ ...prev, recommendedFor: e.target.value }));
  };

  useEffect(() => {
    async function getProducts() {
      const query = new URLSearchParams();
      if (filter.category) {
        query.append("category", filter.category);
      }
      if (filter.recommendedFor) {
        query.append("recommendedFor", filter.recommendedFor);
      }

      const response = await fetch(`http://localhost:5050/products/?${query}`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const products = await response.json();
      console.log(query.toString());
      setProducts(products);
    }

    getProducts();

    return;
  }, [filter]);

  const oilCleanser = products.filter(
    (prod) => prod.category === "Oil Cleanser"
  );
  const cleanser = products.filter((prod) => prod.category === "Cleanser");
  const treatment = products.filter((prod) => prod.category === "Treatment");
  const moisturizer = products.filter(
    (prod) => prod.category === "Moisturizer"
  );
  const sunscreen = products.filter((prod) => prod.category === "Sunscreen");

  const Categories = ({ products, name }) => {
    return (
      <div className="mainMapping">
        <div className="categoryDivision">
          <h3 className="categoryTitle">{name}</h3>
        </div>
        <div className="productsByCategory">
          {products.length
            ? products.map((product) => (
                <Card key={product._id} sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image={product.imageURL}
                      alt={product.name}
                    />
                    <CardContent>
                      <h5>{product.name}</h5>
                      <h4>{product.brand}</h4>
                      {product.ingredients?.map((ingredient) => (
                        <p>{ingredient.name}</p>
                      ))}
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))
            : "No product matches your search"}
        </div>
      </div>
    );
  };
  console.log(filter);
  return (
    <div>
      <div>
        <h2>Routine Generator</h2>
      </div>
      <div className="mainSection">
        <div className="left">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="expandIcon" />}
            >
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
                    value=""
                    control={<Radio />}
                    label="All"
                    labelPlacement="start"
                    onClick={handleClick}
                  />
                  <FormControlLabel
                    value="Oily"
                    control={<Radio />}
                    label="Oily"
                    labelPlacement="start"
                    onClick={handleClick}
                  />
                  <FormControlLabel
                    value="Dry"
                    control={<Radio />}
                    label="Dry"
                    labelPlacement="start"
                    onClick={handleClick}
                  />
                  <FormControlLabel
                    value="Combination"
                    control={<Radio />}
                    label="Combination"
                    labelPlacement="start"
                    onClick={handleClick}
                  />
                  <FormControlLabel
                    value="Normal"
                    control={<Radio />}
                    label="Normal"
                    labelPlacement="start"
                    onClick={handleClick}
                  />
                </RadioGroup>
              </FormControl>
            </AccordionDetails>
          </Accordion>
          <ConcernFiltering />
          <IngredientFiltering />
          <NoGoFiltering />
        </div>
        <div className="productsMapping">
          <Categories products={oilCleanser} name="Oil Cleanser" />
          <Categories products={cleanser} name="Cleanser" />
          <Categories products={treatment} name="Treatment" />
          <Categories products={moisturizer} name="Moisturizer" />
          <Categories products={sunscreen} name="Sunscreen" />
        </div>
      </div>
    </div>
  );
};

export default RoutineGenerator;
