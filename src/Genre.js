import React from "react";
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom";

function Genre({record, token}) {
    console.log(record)





    return (
       
        <NavLink to="/recordinfotwo" state={{ from: {record, token} }}>
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
            </NavLink>
        )
}

export default Genre