import Releases from "./Releases";
import React from 'react';

function ArtistContainer({artists, releases}) {
    console.log("rendered artist container")
     console.log(artists)
    console.log(artists.images)
    console.log(releases)
   let newreleases = releases.slice(0,8)

    return (
        <div id="artistcontainer">
            <h2>More from your Artist..</h2>
             <h1 id="artisttitle">{artists.name}</h1>
            { artists ? <img id="artistimage" src={artists.images[0].url} alt="artist"></img> : null} 
            {/* <h1 id="artisttitle">{artists.title}</h1>
            <img id="artistimage" src={artists.thumb} alt="artist"></img> */}
            <div id="releasediv">
             {newreleases ? newreleases.map((release) => <Releases key={release.id} release={release}></Releases>) : null} 
             </div>
        </div>
    )
}

export default ArtistContainer