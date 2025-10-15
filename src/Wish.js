import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';



function Wish({wish, wishes, setWishes}) {

  function handleDelete(id) {
    
  //   fetch(`http://localhost:3000/records/${id}`, {
  //   method: "DELETE",
  //   headers: {
  //     "Content-Type": "application/json"
  //   }
  // })
    let newws = wishes.filter((w) => w.id !== id)
    setWishes(newws)

  }
  
    console.log(wish.key)
    
    return(
         <div id="wish">
        <ListGroup>
            <ListGroup.Item action variant="info">
          {wish.key}  <img id="wishimg" src={wish.images[2].url} alt="wish"></img> {wish.name}
          <button onClick={() => handleDelete(wish.id)}>delete</button>
            </ListGroup.Item>
        </ListGroup>

         </div>
    )
}

export default Wish