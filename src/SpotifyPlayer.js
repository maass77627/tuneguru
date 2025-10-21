
import React from "react";
import { useEffect, useState } from "react";



export default function SpotifyPlayer({ token, currentTrack }) {
  console.log(currentTrack)
  const [player, setPlayer] = useState(null);
  const [deviceId, setDeviceId] = useState(null);
  const [isPaused, setIsPaused] = useState(true);
  

  useEffect(() => {
    window.onSpotifyWebPlaybackSDKReady = () => {
      const newPlayer = new window.Spotify.Player({
        name: "My React Spotify Player",
        getOAuthToken: cb => { cb(token); },
        volume: 0.5,
      });

  
      newPlayer.addListener("initialization_error", ({ message }) => console.error(message));
      newPlayer.addListener("authentication_error", ({ message }) => console.error(message));
      newPlayer.addListener("account_error", ({ message }) => console.error(message));
      newPlayer.addListener("playback_error", ({ message }) => console.error(message));

     
      newPlayer.addListener("player_state_changed", state => {
        if (!state) return;
        setIsPaused(state.paused);
      });

      newPlayer.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
        setDeviceId(device_id);
      });

      newPlayer.connect();
      setPlayer(newPlayer);
    };

    
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (player) player.disconnect();
    };
  }, [token]);

  
  const play = (trackUri) => {
    fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
      method: "PUT",
      body: JSON.stringify({ uris: [trackUri] }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    setIsPaused(false)
  };

  

  const pause = () => {
    console.log("inside pause")
    if (player) {

      fetch('https://api.spotify.com/v1/me/player', {
  method: 'PUT',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    device_ids: [deviceId],
    play: false, 
  }),
});

      player.pause().then(() => {
        console.log("Paused using Spotify Web Playback SDK");
         setIsPaused(true); 
      }).catch(error => {
        console.error("Failed to pause playback:", error);
      });
    } else {
      console.warn("Player not ready");
    }
  };
  

  return (
    
    <div id="player">
      <h2>🎧 Spotify Player</h2><br></br>
      {currentTrack ? (
      
        <div>
           <p><strong>{currentTrack.name}</strong> </p>
           <p>{ currentTrack.artists ? currentTrack.artists[0].name : null}</p> 
           <button onClick={() => play(currentTrack.uri)}>
           ▶️ Play {currentTrack.name}
           </button>  
          <button onClick={pause}>⏸️ Pause</button>  
       </div>
) : (
  <p>No track playing</p>
)}


        </div>
      
  );
}