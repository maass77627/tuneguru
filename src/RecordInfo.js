
<<<<<<< HEAD
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
})

    return(
        <div  id="recordinfo">
            <div id="tran">
            <h1 id="infotitle">{from.release.name}</h1>
            </div>
            <div id="tran">
            <h3>{from.release.artist}</h3>
            <h4>{from.release.description}</h4>
            <img id="infoimage" src={from.release.images[2].url} alt="record"></img>
            </div>

            <div id="tran"></div>
            <h3 id="tracktitle">Tracks</h3>
            <div id="tran"></div>

            <div id="tran">
            <div id="tracks">
                {tracks.map((track) => <Track track={track} />)}
            </div>
            </div>
=======
import React from "react"

function RecordInfo({record}) {
console.log(record)



    return(
        <div  id="recordinfo">
            <h1>{record.title}</h1>
            <h3>{record.artist}</h3>
            <h4>{record.description}</h4>
            <img id="infoimage" src={record.image} alt="record"></img>

>>>>>>> 1e780f475ce54677c5ae1e380e09665d107c5c15
        </div>
    )
}

export default RecordInfo