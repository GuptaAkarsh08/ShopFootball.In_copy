import React from 'react'
import {useParams,Link} from "react-router-dom"
import {Stack,Grid,Box} from "@mui/material"
import {FaHome,FaArrowCircleLeft,FaArrowAltCircleRight} from "react-icons/fa";
import {Data} from "../Data/Data";
import "../Style/Products.css";

const Header = ({children}) => {
    let {id} = useParams()
  const [data] = (Data.filter(item => (item.id) == id))
  return (
    [children]
  )
}

export default Header