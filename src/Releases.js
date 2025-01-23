import Card from 'react-bootstrap/Card';
<<<<<<< HEAD
import Heart from '@react-sandbox/heart';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import React from "react";

function Releases({release, wishes, setWishes}) {

  const [active, setActive] = useState(false)


  const handleClick = (release) => {
    console.log(release);
    setWishes([...wishes, release])
    setActive(!active)
    console.log(wishes)
  };



    return ( <div id="release">
      <Heart 
         id="heart"
        width={24}
        height={24}
        active={active}
        onClick={() => handleClick(release)}
      />
        <NavLink to="/recordinfo" state={{ from: {release} }}>
        <Card id="release" >
        <Card.Img id="cardimg" src={release.images[1].url} />
        <Card.Body>
        <Card.Title>{release.name.substring(0, 13)}</Card.Title>
=======

function Releases({release}) {
console.log(release)


    return ( 
        <Card id="release" >
        <Card.Img  src={release.images[1].url} />
        <Card.ImgOverlay>
        <Card.Body>
        <Card.Title>{release.name}</Card.Title>
>>>>>>> 1e780f475ce54677c5ae1e380e09665d107c5c15
        <Card.Text>
           {release.release_date} <br></br>
        </Card.Text>
        </Card.Body>
<<<<<<< HEAD
        </Card>
        </NavLink>
        </div>
=======
        </Card.ImgOverlay>
        </Card>
        
>>>>>>> 1e780f475ce54677c5ae1e380e09665d107c5c15
    )
}

export default Releases

