import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

function Track({track, token}) {
    console.log(token)
    
    const handleClick = (track, token) => {
        console.log(token)
        console.log(track.id)

        fetch(`https://api.spotify.com/v1/audio-features/${track.id}`, {
    headers: {
      Authorization: 'Bearer ' + token
    }
   })
   .then((response) => response.json())
   .then((json) => {
      
     console.log(json)})

    }



    return(
        <div id="track">
            <ListGroup>
            <ListGroup.Item onClick={() => handleClick(track, token)} action variant="info">
                {track.number}  {track.name}
            </ListGroup.Item>
        </ListGroup>
        </div>
    )
}

export default Track