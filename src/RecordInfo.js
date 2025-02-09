
import React from "react";
import Track from "./Track";
import { useLocation } from 'react-router-dom'
import { useState } from "react";
import { useEffect } from "react";

function RecordInfo({record, token}) {
console.log(record)

const [tracks, setTracks] = useState([])

const location = useLocation()
  const { from } = location.state
  console.log(from)

  useEffect(() => {
   fetch(`https://api.spotify.com/v1/albums/${from.release.id}/tracks`, {
    headers: {
      Authorization: 'Bearer ' + token
    }
   })
   .then((response) => response.json())
   .then((json) => {
      setTracks(json.items)
     console.log(json.items)})
}, [])

    return(
        <div  id="recordinfo">

            
            <h1 id="infotitle">{from.release.name}</h1>
            
            
           
            <h3>{from.release.artist}</h3>
            <h4>{from.release.description}</h4>
            <img id="infoimage" src={from.release.images[2].url} alt="record"></img>
            

            
            <h3 id="tracktitle">Tracks</h3>
            <div id="tran"></div>

            <div id="tranfour">
            <div id="tracks">
                {tracks.map((track) => <Track track={track} />)}
            </div>
            </div>

        </div>
    )
}

export default RecordInfo