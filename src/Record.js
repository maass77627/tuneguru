import React from 'react';
<<<<<<< HEAD
import { ListGroup, ListGroupItem } from 'react-bootstrap';
// import RecordInfo from "./RecordInfo";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Popover from 'react-bootstrap/Popover';
// import { ListGroup } from 'react-bootstrap/ListGroup';

//  import { useState } from "react";
=======
// import RecordInfo from "./RecordInfo";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

// import { useState } from "react";
>>>>>>> 1e780f475ce54677c5ae1e380e09665d107c5c15

function Record({record, loadArtist}) {
   console.log(record)

<<<<<<< HEAD
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
=======


    function handleClick(e) {
        // console.log(e)
        console.log(record.artist)
        loadArtist(record.artist)
    // console.log("clicked")
    }



const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{record.title}</Popover.Header>
      <Popover.Header onClick={(e) => handleClick(e)} as="h4">{record.artist}</Popover.Header>
      <Popover.Body>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?{record.description}
      </Popover.Body>
    </Popover>
  );

  const Example = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
>>>>>>> 1e780f475ce54677c5ae1e380e09665d107c5c15
      <img  id="recordimage" src={record.image} alt="record"></img>
    </OverlayTrigger>
  );

    return(
        <Example/>
        

       
    )

}

<<<<<<< HEAD
export default Record

//trigger="click"
=======
export default Record
>>>>>>> 1e780f475ce54677c5ae1e380e09665d107c5c15
