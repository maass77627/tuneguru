import React from 'react';
import { ListGroup } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


function Record({record, loadArtist}) {
   console.log(record)



    function handleClick(e) {
        console.log(record.artist)
        loadArtist(record.artist)
    }

   
    const popover = (
      <ListGroup id="popover">
        <ListGroup.Item variant="warning"   onClick={(e) => handleClick(e)}>
        {"click artist for more info"}
        </ListGroup.Item>
        <ListGroup.Item action variant="warning"   onClick={(e) => handleClick(e)}>
        {record.artist}
        </ListGroup.Item>
        <ListGroup.Item variant="warning"   onClick={(e) => handleClick(e)}>
        {/* {record.description} */}
        </ListGroup.Item>
      </ListGroup>
    )



  const Example = () => (
    <OverlayTrigger  delay={{ show: 250, hide: 1000 }} placement="right" overlay={popover}>
      <img  id="recordimage" src={record.image} alt="record"></img>
    </OverlayTrigger>
  );

    return(
        <Example/>
        )

}

export default Record


