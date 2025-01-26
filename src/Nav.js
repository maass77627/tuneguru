import React from "react";
import { NavLink } from "react-router-dom";
function Nav() {



    return(
        <div id="nav">
        <NavLink id="links" to="/">Home</NavLink>
        <NavLink id="links" to="/form">Add a Record</NavLink>
        <NavLink id="links" to="/wishlist">WishList</NavLink>
        {/* <NavLink id="links" to="/recordinfo">Info</NavLink> */}
        </div>
    )
}

export default Nav