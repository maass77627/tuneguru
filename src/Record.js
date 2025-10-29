
// import React from 'react';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import ListGroup from 'react-bootstrap/ListGroup';

// function Record({ record, loadArtist }) {

//   function handleClick() {
//     loadArtist(record.artist);
//   }

//   const popover = (
//     <ListGroup id="popover">
//       <ListGroup.Item variant="warning" action onClick={handleClick}>
//         Click artist for more info
//       </ListGroup.Item>
//       <ListGroup.Item variant="warning" action onClick={handleClick}>
//         {record.artist}
//       </ListGroup.Item>
//     </ListGroup>
//   );

//   return (
//     <OverlayTrigger delay={{ show: 250, hide: 1000 }} placement="right" overlay={popover}>
//       <img className="record-card" src={record.image} alt={record.title} />
//     </OverlayTrigger>
//   );
// }

// export default Record;