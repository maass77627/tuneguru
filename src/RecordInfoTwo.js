import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';


function RecordInfoTwo() {

    const location = useLocation()
     const { from } = location.state
    console.log(from)
    console.log(from.record.title)
    console.log(from.token)
    

    let newtitle
   from.record.title.includes(" ") ? newtitle = from.record.title.replace(/ /g, "+") : newtitle = from.record.title
     
   useEffect((newtitle) => {
    fetch(`https://api.spotify.com/v1/search?q=${newtitle}&type=album`, {
        headers: {
          Authorization: 'Bearer ' + from.token
        }
    
      })
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        })

   })



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