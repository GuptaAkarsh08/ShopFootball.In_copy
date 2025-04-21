import React from "react";
import {Stack,Box} from "@mui/material"
import LandingPageSlider from "./LandingPageSlider";
import "../Style/Carousel.css";


const LandingPage = () =>{
return(
  <>
     <div className="slider"></div>
     <div className="Categories">
      <h1>Categories</h1>
     </div>
     <Stack direction={{xs:"column" , sm:"row"}}   className="categories-helper">
      <Box className="t-shirts" >
      </Box>
      <Box className="posters" >
      </Box>
     </Stack>
     <div className="container-fluid">
      <div className="description" >
           <h1>WHO ARE WE?</h1>
         <br className="title-seperator" style={{borderBottom:"2px solid red"}}> 
         </br>
          <p>We at Shop Football are fans of the beautiful game just like you!</p>
          <p>Encapsulating the plethora of emotions from football moments in our</p>
          <p>exclusive designs & materializing them for you to wear in. That’s our goal</p> 
          <p>and we are volleying it. Stay tuned for a lot more exciting stuff coming your way.</p>
      </div>

      </div>  
      <LandingPageSlider/>
 </>
)
}

export default LandingPage;