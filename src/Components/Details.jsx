import React,{useState} from 'react'
import "../Style/Products.css";
import {Link} from "react-router-dom";

const Details = ({p}) => {

  return ( 
    
    <div>
       <Link to={`/product/${p.id}`} className="add-to-cart">
              <div className="product-main-div">
                <div className="product-sub-div">
                  <img src={p.src} className="" alt="" />
                 <p >{p.desc}</p>
                  <p className="text-divider"></p> 
                 <p style={{color:"#828384"}}>₹ {p.price}</p>
                 <p className="text-divider"></p> 
                </div>
              </div>
      </Link>  
    </div>
  )
}

export default Details;