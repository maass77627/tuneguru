import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import Track from "./Track";

function RecordInfoTwo() {

    const [albums, setAlbums] = useState([])
    const [tracks, setTracks] = useState([])

    const location = useLocation()
     const { from } = location.state
    console.log(from.record.artist)
    console.log(from.record.title)
    console.log(from.token)
    

     let newartist
    //  from.record.artist.includes(" ") ? newartist = "+" + from.record.artist.replace(/ /g, "+") : newartist = from.record.artist

    let newtitle
//    from.record.title.includes(" ") ? newtitle = from.record.title.replace(/ /g, "+") : newtitle = from.record.title

   //'https://api.spotify.com/v1/search?q=blue+album++weezer&type=album'
  // 'https://api.spotify.com/v1/search?q=${newtitle}+${newartist}&type=album'
  //`https://api.spotify.com/v1/search?q=${newtitle}&type=album`
     
   useEffect((newtitle, newartist) => {
    from.record.title.includes(" ") ? newtitle = from.record.title.replace(/ /g, "+") : newtitle = from.record.title
    from.record.artist.includes(" ") ? newartist = "+" + from.record.artist.replace(/ /g, "+") : newartist = from.record.artist
    console.log(newtitle)
    console.log(newartist)
    fetch(`https://api.spotify.com/v1/search?q=${newtitle}${newartist}&type=album`, {
        headers: {
          Authorization: 'Bearer ' + from.token
        }
    
      })
      .then((response) => response.json())
      .then((json) => {
        console.log(json.albums.items[0].id)
        getTracks(json.albums.items[0].id)
        setAlbums(json.albums.items)
        findAlbum(json.albums.items)

        })
        // findAlbum(albums)

   }, [])

   function findAlbum(albums) {
    console.log(albums)
    let newestalbums = albums.find((album) => album.name === from.record.title)
    console.log(newestalbums)
   }

   function getTracks(albumid){
    console.log(albumid)
    fetch(`https://api.spotify.com/v1/albums/${albumid}/tracks`, {
        headers: {
          Authorization: 'Bearer ' + from.token
        }
    
      })
      .then((response) => response.json())
      .then((json) => {
        console.log(json.items)
        // getTracks(json.albums.items[0].id)
        setTracks(json.items)
        // findAlbum(json.albums.items)

        })
        console.log(tracks)
   }


    return (
      <div id="background">
        <div id="tran">
        <div id="recordinfotwo">
            {/* <div  id="recordinfotwo"> */}
            <h1 id="infotitletwo">{from.record.title}</h1>
            <h3>{from.record.artist}</h3>
            <h4>{from.record.description}</h4>
            <img id="infoimagetwo" src={from.record.image} alt="record"></img>
            {/* </div> */}
         </div>

        <h3 id="tracktwotitle">Tracks</h3>
         <div id="trackstwo">
         {tracks ? tracks.map((track) => <Track key={track.id} token={from.token} track={track} />) : null}
        </div>
        </div>
        </div>

        

    )

}

export default RecordInfoTwo