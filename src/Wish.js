import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';



function Wish({wish}) {
  
    console.log(wish.key)
    
    return(
         <div id="wish">
        <ListGroup>
            <ListGroup.Item action variant="info">
          {wish.key}  <img id="wishimg" src={wish.images[2].url} alt="wish"></img> {wish.name}
            </ListGroup.Item>
        </ListGroup>

         </div>
    )
}

export default Wish