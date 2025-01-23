import React from "react";
<<<<<<< HEAD
import Wish from "./Wish"


function WishList({wishes}) {
    console.log(wishes)

    return (
        <div id="background">
        <div id="wishlist">
            <h1>WishList</h1>
            {wishes.map((wish) => <Wish wish={wish}/>)}
        </div>
        </div>
=======



function WishList() {

    return (
        <div id="wishlist">

        </div>

>>>>>>> 1e780f475ce54677c5ae1e380e09665d107c5c15
    )
}

export default WishList