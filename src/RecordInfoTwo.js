import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import Track from "./Track";

function RecordInfoTwo() {

     const [albums, setAlbums] = useState([])
    const [tracks, setTracks] = useState([])

    const location = useLocation()
     const { from } = location.state
    

    //  let newartist
    

    // let newtitle

     
   useEffect((newtitle, newartist) => {
    from.record.title.includes(" ") ? newtitle = from.record.title.replace(/ /g, "+") : newtitle = from.record.title
    from.record.artist.includes(" ") ? newartist = "+" + from.record.artist.replace(/ /g, "+") : newartist = from.record.artist
    
    fetch(`https://api.spotify.com/v1/search?q=${newtitle}${newartist}&type=album`, {
        headers: {
          Authorization: 'Bearer ' + from.token
        }
    
      })
      .then((response) => response.json())
      .then((json) => {
        
        getTracks(json.albums.items[0].id)
        setAlbums(json.albums.items)
        findAlbum(json.albums.items)

        })
        

   }, [])

   function findAlbum(albums) {
    let newestalbums = albums.find((album) => album.name === from.record.title)
   }

   function getTracks(albumid){
    fetch(`https://api.spotify.com/v1/albums/${albumid}/tracks`, {
        headers: {
          Authorization: 'Bearer ' + from.token
        }
    
      })
      .then((response) => response.json())
      .then((json) => {
        setTracks(json.items)})
   }


    return (
      <div id="background">
        <div id="tran">
        <div id="recordinfotwo">
            <h1 id="infotitletwo">{from.record.title}</h1>
            <h3>{from.record.artist}</h3>
            <h4>{from.record.description}</h4>
            <img id="infoimagetwo" src={from.record.image} alt="record"></img>
           <h3 id="tracktwotitle">Tracks</h3>
         <div id="trackstwo">
         {tracks ? tracks.map((track) => <Track key={track.id} token={from.token} track={track} />) : null}
        </div>
        </div>
        </div>
        </div>
         )

}

export default RecordInfoTwo