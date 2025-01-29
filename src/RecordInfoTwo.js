import React from "react";
import { useLocation } from 'react-router-dom';


function RecordInfoTwo() {

    const location = useLocation()
     const { from } = location.state
    console.log(from)
    console.log(from.record.title)


    function getTracks(albumid) {
        fetch(`https://api.spotify.com/v1/albums/${albumid}/tracks`, {
    headers: {
      Authorization: 'Bearer ' + token
    }
   })
   .then((response) => response.json())
   .then((json) => {
     console.log(json)})
    }

    return (
        <div id="tran">
        <div id="recordinfotwo">
            <div  id="recordinfotwo">
            <h1 id="infotitletwo">{from.record.title}</h1>
            <h3>{from.record.artist}</h3>
            <h4>{from.record.description}</h4>
            <img id="infoimagetwo" src={from.record.image} alt="record"></img>
            </div>
         </div>
        </div>

    )

}

export default RecordInfoTwo