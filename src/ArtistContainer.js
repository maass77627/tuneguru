import Releases from "./Releases";
import React from 'react';

<<<<<<< HEAD
function ArtistContainer({artists, releases, wishes, setWishes}) {
=======
function ArtistContainer({artists, releases}) {
>>>>>>> 1e780f475ce54677c5ae1e380e09665d107c5c15
    console.log("rendered artist container")
     console.log(artists)
    console.log(artists.images)
    console.log(releases)
   let newreleases = releases.slice(0,8)

    return (
        <div id="artistcontainer">
<<<<<<< HEAD
            <div id="border">
            <h2>More from your Artist..</h2>
            </div>
             <h1 id="artisttitle">{artists.name}</h1>
            { artists ? <img id="artistimage" src={artists.images[0].url} alt="artist"></img> : null} 
          
            <div id="releasediv">
             {newreleases ? newreleases.map((release) => <Releases wishes={wishes} setWishes={setWishes} key={release.id} release={release}></Releases>) : null} 
=======
            <h2>More from your Artist..</h2>
             <h1 id="artisttitle">{artists.name}</h1>
            { artists ? <img id="artistimage" src={artists.images[0].url} alt="artist"></img> : null} 
            {/* <h1 id="artisttitle">{artists.title}</h1>
            <img id="artistimage" src={artists.thumb} alt="artist"></img> */}
            <div id="releasediv">
             {newreleases ? newreleases.map((release) => <Releases key={release.id} release={release}></Releases>) : null} 
>>>>>>> 1e780f475ce54677c5ae1e380e09665d107c5c15
             </div>
        </div>
    )
}

export default ArtistContainer