import React, { useContext } from 'react'
import {Stack} from "@mui/material"
import {Link} from "react-router-dom"
import Icon from "../assets/resources.png";
import {FaUser} from "react-icons/fa";
import CartBadge from "./CartBadge";
import { CartContext } from '../Context/CartContext';
 
const Navbar = () => {
  const cart = useContext(CartContext);
   
  return (
    <>
    <Stack direction={"row"} useFlexGap spacing={{xs: 1, sm: 2, md: 4}} sx={{xs: 'column', sm: 'row',ml:"30px"}} justifyContent={"start"}>
      <Link className='nav-link' to="/" >HOME</Link>
      <Link className='nav-link' to='/products'>PRODUCTS</Link>
      <Link className='active' to="/legacies">LEGACIES</Link>
    
    <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}  sx={{marginLeft:"220px" , marginTop:"0px"}} >
      <Link to="/">
        <img src={Icon} alt=""  style={{position:"relative", marginLeft:"10px",textAlign:"center",width:"60px",height:"69px" , marginTop:"0px"}}/>
      </Link>
    </Stack>
    <Stack direction={"row"} justifyContent={"flex-end"} alignItems={"center"} style={{marginLeft:"415px"}} spacing={5}>
        <Link className='nav-icons' to="/signIn"><FaUser /></Link>
        <CartBadge length={cart.items.length}/>
    </Stack>
    </Stack>
    </>
  )
}

export default Navbar