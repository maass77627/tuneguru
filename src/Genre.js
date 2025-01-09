import React from "react";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Genre({record}) {
    console.log(record)

    return (
       
       
           <Card id="genre" >
            <Card.Img  src={record.image} />
            <Card.ImgOverlay>
            <Card.Body>
            <Card.Title>{record.title}</Card.Title>
            <Card.Text>
                {record.artist} <br></br>
             {record.description}
            </Card.Text>
            </Card.Body>
            </Card.ImgOverlay>
            </Card>
        )
}

export default Genre