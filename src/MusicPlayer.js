// import React from 'react';
// import { SpotifyWebPlayback } from 'react-spotify-web-playback';

// const MusicPlayer = ({token}) => {
//     // Obtain the access token from local storage or your state management system
//     const accessToken =    token //localStorage.getItem('access_token');
  
//     // Replace 'YOUR_SPOTIFY_CLIENT_ID' with your actual Client ID
//     const clientId = '28991f2364bc498ba7978a55778a2b14';
  
//     return (
//       <SpotifyWebPlayback
//         token={accessToken}
//         name="My Music Player"
//         uris={[]}
//         play={true}
//         callback={({ device_id }) => {
//           console.log('Successfully connected with ID: ' + device_id);
//         }}
//         styles={{
//           bgColor: '#121212',
//           color: '#ffffff',
//           trackNameColor: '#ffffff',
//           trackArtistColor: '#b3b3b3',
//           loaderColor: '#1cb954',
//           sliderColor: '#1cb954',
//         }}
//       />
//     );
//   };
  
//   export default MusicPlayer;