
import React from "react";
import { useEffect, useState } from "react";

export default function SpotifyPlayer({ token, currentTrack }) {
  console.log(currentTrack)
  const [player, setPlayer] = useState(null);
  const [deviceId, setDeviceId] = useState(null);
  const [isPaused, setIsPaused] = useState(true);
  const [track, setTrack] = useState(null);

  useEffect(() => {
    // Define global callback BEFORE loading the SDK
    window.onSpotifyWebPlaybackSDKReady = () => {
      const newPlayer = new window.Spotify.Player({
        name: "My React Spotify Player",
        getOAuthToken: cb => { cb(token); },
        volume: 0.5,
      });

      // Error handling
      newPlayer.addListener("initialization_error", ({ message }) => console.error(message));
      newPlayer.addListener("authentication_error", ({ message }) => console.error(message));
      newPlayer.addListener("account_error", ({ message }) => console.error(message));
      newPlayer.addListener("playback_error", ({ message }) => console.error(message));

      // Player state changed
      newPlayer.addListener("player_state_changed", state => {
        if (!state) return;
        setTrack(state.track_window.current_track);
        setIsPaused(state.paused);
      });

      // Ready
      newPlayer.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
        setDeviceId(device_id);
      });

      newPlayer.connect();
      setPlayer(newPlayer);
    };

    // Load Spotify SDK Script dynamically
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (player) player.disconnect();
    };
  }, [token]);

  // Example: play a track by URI
  const play = (trackUri) => {
    fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
      method: "PUT",
      body: JSON.stringify({ uris: [trackUri] }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  };

  


  

  return (
    <div id="player">
      <h2>🎧 Spotify Player</h2>
      {currentTrack ? (
      
        <div>
           <p><strong>{currentTrack.name}</strong> </p>
          {/* <p><strong>{track.name}</strong> by {track.artists.map(a => a.name).join(", ")}</p> */}

          <button onClick={() => play(currentTrack.uri)}>
        ▶️ Play {currentTrack.name}
       </button>  

        </div>
      ) : (
        <p>No track playing</p>
      )}

     </div>
  );
}