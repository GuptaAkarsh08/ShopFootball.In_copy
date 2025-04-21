import React from "react";
import {FaHome} from "react-icons/fa"
import {Link} from "react-router-dom";
import {Stack,Box,Grid} from "@mui/material"
import Details from "./Details";
import "../Style/Carousel.css";
import Header from "../Layout/Header";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Products = () => {
  const cart = useContext(CartContext);
return(
 <Box className="main-cart">
  <Header>
     <Stack  className="Products-header" display={"flex"} direction={"row"} justifyContent={"space-between"}>
        <div>
        <Link to="/" classname="product-link" style={{textDecoration:"none",color:"white",fontSize:"0.98rem",marginTop:"10px"}} ><FaHome/></Link>
        <span> Home/</span> <span>Products</span>
        </div>
        <div>
            <a href="#" style={{color:"#e5e4e2",textDecoration:"none",fontSize:"20px"}}>Filters</a>
        </div>
    </Stack>
  </Header>
     <Box className="products-cart" sx={{flexGrow:1}} >
      <Grid container spacing={1}>
       {
        cart.products.map((p) => {
          return(
            <Grid item md={3}  key={p.id}>
            <div className="hover-effect">
              <Details p={p} ></Details>
              </div>
            </Grid>
          )
        })
       }
      </Grid>
     </Box>
 </Box>
)
}

export default Products;