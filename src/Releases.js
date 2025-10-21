
import Card from 'react-bootstrap/Card';
import Heart from '@react-sandbox/heart';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import React from "react";
import './Releases.css'; 

function Releases({ release, wishes, setWishes }) {
  const [active, setActive] = useState(true);

  const handleClick = (release) => {
    console.log(release);
    setWishes([...wishes, release]);
    setActive(!active);
    console.log(wishes);
  };

  return (
    <div id="release">
      <Heart
        className="heart"
        width={24}
        height={24}
        active={active}
        onClick={() => handleClick(release)}
      />
      <NavLink to="/recordinfo" state={{ from: { release } }}>
        <Card>
          <Card.Img src={release.images[1]?.url || release.images[0]?.url} alt={release.name} />
          <Card.Body>
            <Card.Title>{release.name.substring(0, 13)}</Card.Title>
            <Card.Text>{release.release_date}</Card.Text>
          </Card.Body>
        </Card>
      </NavLink>
    </div>
  );
}

export default Releases;