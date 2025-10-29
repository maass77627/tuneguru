


 import React from "react";
import Releases from "./Releases";

function ArtistContainer({ artists, releases, wishes, setWishes }) {
  console.log("Rendered ArtistContainer");
  console.log("Artist:", artists);
  console.log("Releases:", releases);

  // const newreleases = releases.slice(0, 8);

  return (
    <div id="artistcontainer">
      
        <h2 id="artistlabel">More from your Artist..</h2>
      

      {artists && (
        <>
          <h1 id="artisttitle">{artists.name}</h1>
          {artists.images?.[0]?.url && (
            <img
              id="artistimage"
              src={artists.images[0].url}
              alt={artists.name || "artist"}
            />
          )}
        </>
      )}

      <div id="releasediv">
        {releases && releases.length > 0 ? (
          releases.map((release) => (
            <Releases
              key={release.id}
              release={release}
              wishes={wishes}
              setWishes={setWishes}
            />
          ))
        ) : (
          <p>No releases available.</p>
        )}
      </div>
    </div>
  );
}

export default ArtistContainer;

