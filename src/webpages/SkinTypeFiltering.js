import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import { Link } from "react-router-dom";

const SkintypeFiltering = () => {
  const [skintype, setSkintype] = useState("");
  const [products, setProducts] = useState([]);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch(
        `http://localhost:5050/products/${skintype}`
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
    <Box>
      <Box>
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          Routine Generator
        </Typography>
      </Box>
      <Box>
        <Tabs value={tab}>
          <Tab
            label="All"
            onClick={() => {
              setSkintype("");
              setTab(0);
            }}
          />
          <Tab
            label="Oily"
            onClick={() => {
              setSkintype("oily");
              setTab(1);
            }}
          />
          <Tab
            label="Dry"
            onClick={() => {
              setSkintype("dry");
              setTab(2);
            }}
          />
          <Tab
            label="Combination"
            onClick={() => {
              setSkintype("combination");
              setTab(3);
            }}
          />
          <Tab
            label="Normal"
            onClick={() => {
              setSkintype("normal");
              setTab(4);
            }}
          />
        </Tabs>
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
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default SkintypeFiltering;
