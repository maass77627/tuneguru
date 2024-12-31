import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Genre({record}) {
    console.log(record)

    return (
        // <div id="genre">
        //    {/* <h1> {record.title} </h1>
        //    <img src={record.image} alt="genre"></img> */}
        //    </div>
           <Card id="genre" style={{ height: '18rem', width: '25rem' }}>
            <Card.Img  src={record.image} />
            <Card.ImgOverlay>
            <Card.Body>
            <Card.Title>{record.title}</Card.Title>
            <Card.Text>
             {record.description}
            </Card.Text>
             <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card.ImgOverlay>
            </Card>
        

    )
}

export default Genre