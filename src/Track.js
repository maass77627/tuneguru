import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';


function Track({track, token, setCurrentTrack}) {
    console.log(token)
    
    const handleClick = (track, token) => {
       
        setCurrentTrack(track)
        

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