


 import React from "react";
import Releases from "./Releases";

function ArtistContainer({ artists, releases, wishes, setWishes }) {
  console.log("Rendered ArtistContainer");
  console.log("Artist:", artists);
  console.log("Releases:", releases);

  const newreleases = releases.slice(0, 8);

  return (
    <div id="artistcontainer">
      <div id="border">
        <h2>More from your Artist..</h2>
      </div>

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
        {newreleases && newreleases.length > 0 ? (
          newreleases.map((release) => (
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