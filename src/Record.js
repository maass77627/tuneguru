import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
// import RecordInfo from "./RecordInfo";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Popover from 'react-bootstrap/Popover';
// import { ListGroup } from 'react-bootstrap/ListGroup';

//  import { useState } from "react";

function Record({record, loadArtist}) {
   console.log(record)

  //  const [hovering, setHovering] = useState(false)


    function handleClick(e) {
        console.log(record.artist)
        loadArtist(record.artist)
    }

    // function handleHover() {
    //   setHovering(!hovering)

    // }

    const popover = (
      <ListGroup id="popover">
        <ListGroup.Item variant="warning"   onClick={(e) => handleClick(e)}>
        {record.title}
        </ListGroup.Item>
        <ListGroup.Item action variant="warning"   onClick={(e) => handleClick(e)}>
        {record.artist}
        </ListGroup.Item>
        <ListGroup.Item variant="warning"   onClick={(e) => handleClick(e)}>
        {record.description}
        </ListGroup.Item>
      </ListGroup>
    )


// const popover = (
//     <Popover id="popover-basic">
//       <Popover.Header as="h3">{record.title}</Popover.Header>
//       <Popover.Header  style={{backgroundColor: hovering ? "lightblue" : "darkblue"}} onMouseEnter={handleHover}  onClick={(e) => handleClick(e)} as="h4">{record.artist}</Popover.Header>
//       <Popover.Body>
//         {record.description}
//       </Popover.Body>
//     </Popover>
//   );

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

//trigger="click"
