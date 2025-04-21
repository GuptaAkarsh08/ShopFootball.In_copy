import React from "react";
import {Badge} from "@mui/material"
import {ShoppingBag} from "phosphor-react"
import {useNavigate} from "react-router-dom"

const CartBadge = ({length}) => {
    const navigate = useNavigate()
return(
<Badge badgeContent={length} color="warning">
    <ShoppingBag size={24} style={{fontSize:"1.4rem"}} onClick={() => navigate("/checkout")}/>
</Badge>
)
}

export default CartBadge;