import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

function Track({track}) {


    return(
        <div id="track">
            <ListGroup>
            <ListGroup.Item action variant="info">
                {track.number}  {track.name}
            </ListGroup.Item>
        </ListGroup>
        </div>
    )
}

export default Track