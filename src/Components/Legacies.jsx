import React from 'react'
import Products from './Products'
import {Stack } from "@mui/material"
import {FaCaretSquareLeft} from "react-icons/fa";
import "../Style/Products.css";

const Legacies = () => {
  return (
    <React.Fragment>
     <Stack className='Title-Header' flexDirection={"row"} >
        <div style={{marginLeft:"18px",marginTop:"8px"}}>
         <p style={{fontSize:'1.5rem'}}><FaCaretSquareLeft/></p>
        </div>
        <div className='title-div'>
            <h5 >LEGACIES BY SHOP FOOTBALL</h5>
        </div>
     </Stack>
    <Products/>
    </React.Fragment>
  )
}

export default Legacies;