import React, { useState, useEffect } from "react";
import axios from "axios";
//import Loading from "./Loading";
import { HiOutlineSearch } from "react-icons/hi";


const Search = () => {
   const [search, setSearch] = useState("");
  const [products, setProducts] = useState({});
  //const [loading, setLoading] = useState(false);

    const handleChange = event => {
   // setSearch(event.target.value);
  };

   const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.searchQuery.value)
    //if (!search) return alert("Search cannot be empty");
    setSearch(event.target.searchQuery.value);
 
  
  };

  console.log("search state, ", search);
  //  const getData = () => {
  //   //setLoading(true);
  
  // };
  useEffect(() => {
    console.log("Brand:",search);
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
    {/* {products.filter((product) => 
      search ? product.includes(search) : products
    )
    .map((product) => (
     <div key={product._id}>
            <p>{product.name}</p>
                <br /><br/>
                <p>Brand: {product.brand}</p>
                <br />
    </div>
    ))} */}
    <form onSubmit={handleSubmit}>
     <li className="search">
            <div className="search-box">
              <button className="search-button">
                <HiOutlineSearch />
              </button>
              <input
              name="searchQuery"
                type="text"
                className="input-search"
                placeholder="Search..."
                // value={search}
                // onChange={handleChange}
              />
            </div>
      </li>
      </form>
     </div>
    
  )
}

export default Search;