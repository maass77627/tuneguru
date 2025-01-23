import React from "react";
import { NavLink } from "react-router-dom";
function Nav() {



    return(
        <div id="nav">
        <NavLink id="links" to="/">Home</NavLink>
        <NavLink id="links" to="/form">Add a Record</NavLink>
        <NavLink id="links" to="/wishlist">WishList</NavLink>
<<<<<<< HEAD
        {/* <NavLink id="links" to="/recordinfo">Info</NavLink> */}
=======
>>>>>>> 1e780f475ce54677c5ae1e380e09665d107c5c15
        </div>
    )
}

export default Nav