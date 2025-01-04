import Releases from "./Releases";
import React from 'react';

function ArtistContainer({artists, releases}) {
    console.log("rendered artist container")
     console.log(artists)
    // console.log(artists.name)
 console.log(artists.images)
 console.log(releases)
//  console.log(releases.slice(0,8))
// console.log(releases.slice(0,8))
let newreleases = releases.slice(0,8)

    return (
        <div id="artistcontainer">
             <h1 id="artisttitle">{artists.name}</h1>
            { artists ? <img id="artistimage" src={artists.images[0].url} alt="artist"></img> : null} 
            {/* <h1 id="artisttitle">{artists.title}</h1>
            <img id="artistimage" src={artists.thumb} alt="artist"></img> */}
             {newreleases ? newreleases.map((release) => <Releases key={release.id} release={release}></Releases>) : null} 

        </div>
    )
}

export default ArtistContainer