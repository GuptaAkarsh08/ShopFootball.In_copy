import Icon1 from "../assets/ProductImages/2-Netherlands-1.jpg";
import Icon2 from "../assets/ProductImages/4-City-1.jpg";
import Icon3 from "../assets/ProductImages/5-Madrid-1.jpg";
import Icon4 from "../assets/ProductImages/6-portugal-1.jpg";
import Icon5 from "../assets/ProductImages/3-Bayern-1.jpg";
import Icon6 from "../assets/ProductImages/9-Blaugrana-1.jpg";
import Icon7 from "../assets/ProductImages/1-Red-Devils-1.jpg";

const Data = [
{
    id:1,
    desc:"The Philospher",
    src:Icon1,
    price:"1199",
   },
   {
     id:2,
     desc:"The Sky Blues",
     src:Icon2,
     price:"1499",

   },
   {
     id:3,
     desc:"The Royals",
     src:Icon3,
     price:"1499",

   },
   {
     id:4,
     desc:"The King's Landing",
     src:Icon4,
     price:"1499",

   },
   { 
     id:5,
     desc:"The German Giants",
     src:Icon5,
     price:"1499",

   },
   {
     id:6,
     desc:"The Blaugrana",
     src:Icon6,
     price:"1499",
    
   },
   {
     id:7,
     desc:"The Whites",
     src:Icon1,
     price:"1499",
   
   },
   {
     id:8,
     desc:"The Red Devils",
     src:Icon7,
     price:"1499",
    
   }
]

const getProductData = (id) => {
  let productData = Data.find((product) => product.id === id);
  if (productData === undefined){
    console.log("product Data does not exits for particular Id:",id)
    return undefined;
  }
  return (productData);
}

export {Data,getProductData};