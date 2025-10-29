
import React, { useEffect, useState } from "react";

export default function SpotifyPlayer({ token, currentTrack }) {
  const [player, setPlayer] = useState(null);
  const [deviceId, setDeviceId] = useState(null);
  const [isPaused, setIsPaused] = useState(true);

  
  const [pos, setPos] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setDragging(true);
    setOffset({ x: e.clientX - pos.x, y: e.clientY - pos.y });
  };
  const handleMouseMove = (e) => {
    if (dragging) setPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };
  const handleMouseUp = () => setDragging(false);

  
  useEffect(() => {
    window.onSpotifyWebPlaybackSDKReady = () => {
      const newPlayer = new window.Spotify.Player({
        name: "My React Spotify Player",
        getOAuthToken: (cb) => cb(token),
        volume: 0.5,
      });

      newPlayer.addListener("initialization_error", ({ message }) => console.error(message));
      newPlayer.addListener("authentication_error", ({ message }) => console.error(message));
      newPlayer.addListener("account_error", ({ message }) => console.error(message));
      newPlayer.addListener("playback_error", ({ message }) => console.error(message));

      newPlayer.addListener("player_state_changed", (state) => {
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
    setIsPaused(false);
  };

  const pause = () => {
    if (player) {
      fetch("https://api.spotify.com/v1/me/player", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          device_ids: [deviceId],
          play: false,
        }),
      });

      player
        .pause()
        .then(() => {
          console.log("Paused using Spotify Web Playback SDK");
          setIsPaused(true);
        })
        .catch((error) => console.error("Failed to pause playback:", error));
    } else {
      console.warn("Player not ready");
    }
  };

  
  return (
    <div
      id="player"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{
        position: "absolute",
        top: pos.y,
        left: pos.x,
        width: "420px",
        height: "200px",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        padding: "1rem",
        userSelect: "none",
        cursor: "grab",
        zIndex: 1000,
      }}
    >
      <h2
        style={{
          marginTop: 0,
          cursor: "grab",
          background: "rgba(0,0,0,0.1)",
          borderRadius: "8px",
          padding: "5px 10px",
        }}
      >
        🎧 Spotify Player
      </h2>

      {currentTrack ? (
        <div>
          <p>
            <strong>{currentTrack.name}</strong>
          </p>
          <p>{currentTrack.artists ? currentTrack.artists[0].name : null}</p>
          <button onClick={() => play(currentTrack.uri)}>▶️ Play</button>
          <button onClick={pause}>⏸️ Pause</button>
        </div>
      ) : (
        <p>No track playing</p>
      )}
    </div>
  );
}