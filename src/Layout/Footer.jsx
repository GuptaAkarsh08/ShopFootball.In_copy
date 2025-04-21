import React from "react";
import {Stack,Box} from "@mui/material"
import "../Style/Carousel.css";
import {FaInstagram,FaLocationArrow,FaEnvelope} from "react-icons/fa";

const Footer= () => {
return(
<>
<Stack direction={"row"} className="footer-links" spacing={5} >
        <Box className="box">
          <div className="footer-content">
          <h4>Shop Football</h4>
          <p>We aim to make Shop Football your one stop

             destination for everything related to football.</p>
          <p><FaInstagram/></p>
          </div>
        </Box>
        <Box className="box">
          <div className="footer-content">
             <h4>Quick Links</h4>
             <p>Privacy Policy</p>
             <p>Return Policy</p>
             <p>Cancellation Policy</p>
             <p>Terms And Conditions</p>
          </div>
        </Box>
        <Box className="box">
          <div className="footer-content">
          <h4>Information</h4>
          <p>About Us</p>
          <p>Shop</p>
          <p>Contact Us</p>
          </div>
        </Box>
        <Box className="box">
          <div className="footer-content">
            <h4>Contact Us</h4>
            <p><FaLocationArrow/> Noida , UttarPradesh</p>
            <p><FaEnvelope/> ShopFootball@gmail.com</p>
          </div>
        </Box>
      </Stack>
      <Stack direction={"row"} className="footer">
       <Box>
        <p>&copy; 2023 Shop Football. All rights reserved </p>
       </Box>
      </Stack>
</>
)
}

export default Footer;