import React,{useState,useContext, useEffect} from 'react'
import {useParams,Link} from "react-router-dom"
import Header from '../Layout/Header'
import {Box,Button,Grid} from "@mui/material"
import "../Style/Products.css"; 
import {FaArrowRight,FaArrowAltCircleUp,FaArrowCircleLeft,FaArrowCircleRight} from "react-icons/fa";
import {ArrowCircleUp} from 'phosphor-react'
import Dropdown from '../Layout/Dropdown';
import { CartContext } from '../Context/CartContext';



const CartItem = () => {
  const [size,setSize] = useState({})
  const [show,setShow] = useState(true)
  const {addOneToCart,products} = useContext(CartContext);


  let {id} = useParams()
  const [data] = (products.filter(item => (item.id) == id))
  let getid = data.id;

  
  const showText = () => {
    setShow(!show)
    console.log(show)
  }
   

  return (
    <>
    <Header>
    <Box className='details-header'>
      <Grid md={12} className='grid'>
        <Grid className='grid-1'>
          <Link to="/products" style={{marginLeft:"3.4rem",fontSize:"1.2rem",color:"#212121"}}><FaArrowCircleLeft /></Link>
          <span>
            Home / Product / {data.desc}
          </span>
        </Grid>
        <Grid className='grid-2'>
         <Link to="/checkout" style={{fontSize:"1.2rem",color:"#212121"}}><FaArrowCircleRight /></Link>
        </Grid>
      </Grid>
    </Box>
    </Header>

     {/* Main Part */}

    <Box className="main-product">
      <Grid lg={12} className='product-details-grid'>
     <Grid lg={6} className='side-grid-img'>
      <img src={data.src} alt={data.desc}  />
     </Grid>
     <Grid lg={6} className='right-grid-img'>
        <div className='right-grid-div'>
         <h1>{data.desc}</h1>
         <h2>₹{data.price}.00</h2>
         <h5>Material & Care</h5>
        </div>
        <div className='right-grid-main'>
         <div className="title-main">
         <p><span className='arrow'><FaArrowRight/></span>   <span className='span2'>Fabric: 100% Terry Cotton</span> </p>
          <p><span className='arrow'><FaArrowRight/></span>   <span className='span2'>Material: 230 GSM Heavy weight </span></p>
          <p><span className='arrow'><FaArrowRight/></span>   <span className='span2'>Front: Embroidery</span></p>
          <p><span className='arrow'><FaArrowRight/></span>    <span className='span2'>Back: High Density Print</span></p>
          <p><span className='arrow'><FaArrowRight/></span>    <span className="span2">Wash Care: Machine Wash</span></p>
          <p><span className='arrow'><FaArrowRight/></span>    <span className="span2">Fit: Ovesized Fit</span></p>
         </div>
        </div>
        
        <div className="dropdown">
          <span>Size:  <span className='dropdownspan'><Dropdown setSize={setSize} /></span></span>
        </div>

        <div>
          <h5>Or 3 interest free payments of ₹499.00  with <a href="https://stripe.com/" style={{color:"#b1955a",textDecoration:"none"}}>Stripe</a></h5>
          <Button onClick={() => addOneToCart(data.id,data.price, data.src, data.desc)} sx={{bgcolor:"#212121",color:"#b1955a",padding:"6px 14px 6px 14px",borderRadius:"4px",marginTop:"20px"}}>ADD TO CART</Button>
        </div>  
 

        <div className='description'>
           <div className="text-divider-description"></div>
           <div className="description-text">
            <h5>Description</h5>
            <button onClick={showText}><ArrowCircleUp size={20}/></button>
            <br />
            <div className='main-description-text'>
              {
                show==true ? <span>
                  Kindly note that our products are crafted with our original designs, drawing inspiration from the realm of football. These products feature imaginative emblems and are not intended to be official merchandise or replicas of classic kits. We strive to create distinctive, high-quality items that cater to the tastes of both fashion enthusiasts and football aficionados.
                  <br />
                  <p>All products original & exclusively designed by Shop Football.</p>
                </span> : 
                <span>
                  <div className='main-description-text'>
                  SKU: N/A
                  <br />
                  <br />
                  Category: Legacies By Shop Football
                  </div>
                </span>
              }
            </div>

           </div>
        </div>
     </Grid>
     </Grid>
    </Box>
    </>
  )
}

export default CartItem