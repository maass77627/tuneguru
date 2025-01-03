import React from 'react';
// import RecordInfo from "./RecordInfo";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

// import { useState } from "react";

function Record({record, loadArtist}) {
   console.log(record)



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
      <img  id="recordimage" src={record.image} alt="record"></img>
    </OverlayTrigger>
  );

    return(
        <Example/>
        

       
    )

}

export default Record