import React , {useState,useContext} from "react";
import {Box} from "@mui/material"
import {Routes,Route,BrowserRouter as Router} from "react-router-dom"
import "./App.css";


//Components
import Navbar from "./Layout/Navbar";
import Home from "./Components/Home"
import Footer from "./Layout/Footer";
import CartItem from "./Components/CartItem";
import Products from "./Components/Products";
import {Data} from "./Data/Data";
import Error from "./Components/Error";
import Checkout from "./Components/Checkout";
import CartProvider from "./Context/CartContext";
import  SignIn  from "./Components/SignIn";


const App = () => {
        
return(
    <CartProvider>
    <Router>
     <Box sx={{
             width:"100%" , 
             borderTop:"2px solid #EDC126",
             backgroundColor:"whitesmoke",
             marginTop:"0",
             marginLeft:"0",
             padding:"10px 20px",
             position:"relative",
             top:"0"
             }}>
        <Navbar/>
    </Box>
        <Routes>
            <Route path="/" exact element={<Home/>}></Route>
            <Route path="/signIn" exact element={<SignIn/>}></Route>
            <Route path="/products" exact element={<Products/>}></Route>
            <Route path="/product/:id" exact element={<CartItem/> }></Route>
            <Route path="/checkout" element={<Checkout/>}></Route>
            <Route path="*" element={<Error/>}></Route>
        </Routes>
        <Footer/>
    </Router>
   </CartProvider>
)
}


export default App;