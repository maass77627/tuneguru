import React from "react";
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
    )
}

export default WishList