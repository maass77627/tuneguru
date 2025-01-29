import Releases from "./Releases";
import React from 'react';

function ArtistContainer({artists, releases, wishes, setWishes}) {
    
    console.log("rendered artist container")
     console.log(artists)
     console.log(artists.images)
     console.log(releases)
    let newreleases = releases.slice(0,8)


//    const Container = () => (
//     <div id="artistcontainer">

//     </div>
//    );



    return (
        <div id="artistcontainer">
            <div id="border">
            <h2>More from your Artist..</h2>
            </div>
             <h1 id="artisttitle">{artists.name}</h1>
            { artists ? <img id="artistimage" src={artists.images[0].url} alt="artist"></img> : null} 
          
            <div id="releasediv">
             {newreleases ? newreleases.map((release) => <Releases wishes={wishes} setWishes={setWishes} key={release.id} release={release}></Releases>) : null} 
             </div>
        </div>
    )
    
}

// export {ArtistContainer, Container}
 export default ArtistContainer