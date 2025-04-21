import React, {useContext, useEffect, useState} from 'react'
import {Grid,Box,Button} from "@mui/material"
import "../Style/Checkout.css";
import {FaHome} from "react-icons/fa"; 
import {Trash} from "phosphor-react"
import Header from '../Layout/Header';
import { CartContext } from '../Context/CartContext';
import {useNavigate} from "react-router-dom"


const Checkout = () => { 
 const [isOpen, setIsOpen] = useState(false);
 const cart = useContext(CartContext);
 const navigate = useNavigate();
 const [address,setAddress] = useState("Noida Sector 126");
 const [updatedAddress,setUpdatedAddress] = useState("");
 
const onChangeHandler = (e) => {
    e.preventDefault();
    setUpdatedAddress(e.target.value)
 } 
 const handleSubmit = (e) => { 
  console.log("Update the person");
 }
 const update = e => {
  e.preventDefault();
  setAddress(updatedAddress); 
 }

  return (
    <>
     <Header className='cart-section'>
      <Box className="cart-header">
        <div className="cart-details">
           <h2>CART</h2>
           <div className='home-cart'>
             <span><FaHome style={{fontSize:"0.86rem"}}/></span>
             <span>Home / Cart</span>
           </div>
        </div>
      </Box>
     </Header>
     {/* Header */}
     <Box className="main" sx={{flexGrow:1}}>
      <Grid container className='main-title'>
        <Grid  className='main-title-header'>
          <Grid md={3} className="main-grid" >
            <h4>Product</h4>
          </Grid>
          <Grid md={3} className='main-grid'>
            <h4>Price</h4>
          </Grid>
          <Grid md={3} className='main-grid'>
            <h4>Quantity</h4>
          </Grid>
          <Grid md={3} className='main-grid'>
            <h4>SubTotal</h4>
          </Grid>
        </Grid>
      </Grid>
       <table>
        <tbody>
          {
           cart.items.map((Data) => {
            const {price,src,desc,id} = Data;
            const quantity = cart.getProductQuantity(id)
          
              return(
                <tr key={id} className='item-details'> 
                 <td style={{marginTop:"22px",marginLeft:"1.7px"}} onClick={() => cart.deleteFromCart(id)}>
                  <Trash size={22} />
                 </td>
                  <td>
                      <img src={src} className='img' alt="" />
                  </td>
                  <td className='item-price'>
                    <p>{desc}</p>
                  </td>
                  <td className='item-quantity'>
                    <p>₹{price}.00</p>
                  </td>
                  <td className='subtotal' >
                    <div className="button-div">
                    <button className='button' onClick={() => cart.removeOneFromCart(id)}>-</button>
                    <input type="text" id={id} className="button-input" defaultValue={1}  min="1" max="5" value={quantity}/>
                    <button className='button'  onClick={() => cart.addOneToCart(id)}>+</button>
                    </div>
                  </td>
                  <td className='subtotal'>
                    <p>₹{Number(price * quantity)}.00</p>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
       </table>

       <div className='show-total'>
         {
          (cart.items.length === 0 ? (
            <div>
              <div className='first-div'>
                <p>Your Cart is Currently Empty.</p>
              </div>
              <button className='subtotal-button' onClick={() => navigate("/products")} >Return To Shop</button>
            </div>
          ) : (
            <>
             <div className='second-div'>
              <h2>C A R T  <span style={{marginLeft:"7px"}}>T O T A L S</span></h2>
              <table className='second-div-table'>
                <tbody>
                  <tr className='table-row'>
                   <th>Sub Total</th>
                   <td style={{marginLeft:"40px"}}>₹{cart.getTotalCost()}.00</td>
                  </tr>
                  <tr className='table-row'>
                    <th>Shipping </th>
                    <td >
                      <div style={{marginLeft:"43px"}}>
                        <span>Free on orders above 1000 (Free on orders above 1000)</span>
                        <br />
                        <span>Shipping to <span style={{fontWeight:600}}>{address}</span></span>
                        <br />
                        <span onClick={() => setIsOpen(!isOpen)}>Change Address</span>
                        <div >
                          {isOpen === true  ? (
                            <form onSubmit={handleSubmit}>
                              <input type="text" placeholder='Noida Sector 126' defaultValue={"153A wallstreet "}  onChange={onChangeHandler} />
                              <button type="submit" onClick={update}>Update</button>
                            
                            </form>
                          ) : (<span ></span>)
                          }
                        </div>
                     </div>
                    </td>
                  </tr>
  
                  <tr className='table-row'>
                    <th>Total</th>
                    <td style={{marginLeft:"68px"}}>₹{cart.getTotalCost()}.00</td>
                  </tr>
                </tbody>
              </table>
             </div>
             <div className='checkout'>
              <button>Proceed to Checkout</button>
             </div>
            </>
          ))
         }
       </div>
    </Box>
    </>
  )
}

export default Checkout