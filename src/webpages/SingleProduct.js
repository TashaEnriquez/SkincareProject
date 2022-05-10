import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { CardMedia } from "@mui/material";
import { toast } from "react-toastify";
import Loading from "../Loading";
import "../styles/SingleProduct.css";

const SingleProduct = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);

  console.log("single product component");
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `http://localhost:5050/products/${productId}`
        );
        console.log("url", `http://localhost:5050/products/${productId}`);
        console.log(data);
        setProduct(data.data);
        setLoading(false);
      } catch (error) {
        toast.error(error.response?.data.error || error.message);
        setLoading(false);
      }
    })();
  }, [productId]);

  console.log("product", product);

  if (loading) return <Loading />;
  return product ? (
    <div className="single-product">
      <div className="details">
        <div className="big-image">
          <img src={product.imageURL} alt={product.name} />
        </div>
        <div className="details-box">
          <div className="product-details">
            <h2>{product.name}</h2>
            <h4>Brand: {product.brand}</h4>
            <h5>Category: {product.category}</h5>
            <h5>Recommended Skin-type: {product.recommendedFor}</h5>
          </div>
          <div className="ingredients-details">
            {product.ingredients?.map((ingredient) => (
              <div className="ingredient-name">
                <h5>Key Ingredients: {ingredient.name}</h5>
                <p>Ingredients Description: {ingredient.description}</p>
                <p>Ingredient Rating - {ingredient.rating}/5</p>
              </div>
            ))}
          </div>
          <button className="add-to-routine">ADD TO ROUTINE</button>
        </div>
      </div>
    </div>
  ) : (
    "page is not available"
  );
};

export default SingleProduct;
