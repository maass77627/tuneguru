import React from "react";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
<<<<<<< HEAD
import { NavLink } from "react-router-dom";
=======
>>>>>>> 1e780f475ce54677c5ae1e380e09665d107c5c15

function Genre({record}) {
    console.log(record)

    return (
       
<<<<<<< HEAD
        <NavLink to="/recordinfotwo" state={{ from: {record} }}>
           <Card id="genre" >
            <Card.Img  src={record.image} />
             <Card.ImgOverlay> 
=======
       
           <Card id="genre" >
            <Card.Img  src={record.image} />
            <Card.ImgOverlay>
>>>>>>> 1e780f475ce54677c5ae1e380e09665d107c5c15
            <Card.Body>
            <Card.Title>{record.title}</Card.Title>
            <Card.Text>
                {record.artist} <br></br>
             {record.description}
            </Card.Text>
            </Card.Body>
<<<<<<< HEAD
            </Card.ImgOverlay> 
            </Card>
            </NavLink>
=======
            </Card.ImgOverlay>
            </Card>
>>>>>>> 1e780f475ce54677c5ae1e380e09665d107c5c15
        )
}

export default Genre