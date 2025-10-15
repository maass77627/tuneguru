import Card from 'react-bootstrap/Card';
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



    return (
         <div id="release">
      <Heart 
         id="heart"
        //  style={{color: 'yellow'}}
         className="heart"
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
        <Card.Text>
           {release.release_date} <br></br>
        </Card.Text>
        </Card.Body>
        </Card>
        </NavLink>
        </div>
    )
}

export default Releases

