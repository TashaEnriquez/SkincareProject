import React, { useState, useEffect } from "react";
import axios from "axios";
//import Loading from "./Loading";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import '../styles/Search.css';


const Search = () => {
   const [search, setSearch] = useState("");
   const [products, setProducts] = useState([]);
   //const [visible, setVisible] = useState(false);
  //const [loading, setLoading] = useState(false);

  //   const handleChange = event => {
  //  // setSearch(event.target.value);
  // };

   const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.searchQuery.value)
    //if (!search) return alert("Search cannot be empty");
    setSearch(event.target.searchQuery.value);
  };

  //console.log("search state, ", search);
  //  const getData = () => {
  //   //setLoading(true);
  // };


  useEffect(() => {
    console.log("Category:",search);
    axios
    .get(
      `http://localhost:5050/products/?category=${search}`
    )
    .then(response => {
      console.log("response from get",response);
      setProducts(response.data);
      //setLoading(false);
    })
    .catch(error => {
      //setLoading(false);
      console.log("error", error);
    });
  }, [search]);

  return (
    <div>
      {/* in css define two rulesets for popup (display: flex) + popup-hidden display: none
      className={visible ? 'popup' :'popup-hidden'}*/}
    <div className="search-form">
    <form onSubmit={handleSubmit}>
              <li className="search">
            <div className="search-box"> 
              <input
              name="searchQuery"
                type="text"
                className="search-bar"
                placeholder="Search..."
                // value={search}
                // onChange={handleChange}
              />
              <button className="search-button" type="submit">
                <HiOutlineSearch />
              </button>
            </div>
      </li>
      </form>
    
         {products.length>0 && products.map((product) => (
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

            {search && !products.length && (
              <h2>No search results found</h2>
            )}

     </div>
     </div>
  )
}

export default Search;