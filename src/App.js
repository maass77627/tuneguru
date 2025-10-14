
import { useEffect } from 'react';
import React from 'react';
import { useState } from 'react';
import './App.css';
import Form from './Form';
// import MusicPlayer from './MusicPlayer';
import RecordContainer from './RecordContainer';
import GenreRecords from './GenreRecords'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ArtistContainer from './ArtistContainer';
import RecordForm from './RecordForm';
import RecordInfo from './RecordInfo';
import WishList from './WishList';
import Nav from "./Nav";
import Footer from "./Footer";
import RecordInfoTwo from './RecordInfoTwo';
import 'bootstrap/dist/css/bootstrap.min.css';
import SpotifyPlayer from "./SpotifyPlayer";

function App() {
  const CLIENT_ID = "28991f2364bc498ba7978a55778a2b14"
  const REDIRECT_URI = "http://localhost:3006"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  
const SCOPES = [
  "streaming",
  "user-read-email",
  "user-read-private",
  "user-modify-playback-state",
  "user-read-playback-state"
];
// export
//  const loginUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${encodeURIComponent(SCOPES.join(" "))}&response_type=${RESPONSE_TYPE}`;


  const [records, setRecords] = useState([])
  const [newrecords, setNewRecords] = useState([])
  const [token, setToken] = useState("")
  const [artists, setArtists] = useState(null)
  const [releases, setReleases] = useState([])
  const [wishes, setWishes] = useState([])
  const [currentTrack, setCurrentTrack] = useState([])

useEffect(() => {
  fetch("http://localhost:3000/records")
  .then((response) => response.json())
  .then((json) => {
    setRecords(json)
    console.log(json)})
    
}, [])



function loadArtist(artistname) {
  console.log(token)
      let newname
      artistname.includes(" ") ? newname = artistname.replace(/ /g, "+") : newname = artistname
  fetch(`https://api.spotify.com/v1/search?q=artist%3A${newname}&type=artist&limit=1`, {
    headers: {
      Authorization: 'Bearer ' + token
    }

  })
  .then((response) => response.json())
  .then((json) => {
    console.log(json.artists.items[0].id)
    setArtists(json.artists.items[0])
    loadArtistTracks(json.artists.items[0].id)})
    }
    

function loadArtistTracks(artistid) {
  console.log("working")
  console.log(artistid)
  fetch(`https://api.spotify.com/v1/artists/${artistid}/albums`, {
    headers: {
      Authorization: 'Bearer ' + token
    }

  })
  .then((response) => response.json())
  .then((json) => {
    console.log(json.items)
    setReleases(json.items)
    })
    console.log(releases)
  }

  


useEffect(() => {
  const hash = window.location.hash
  let token = window.localStorage.getItem("token")

  if (!token && hash) {
      // @ts-ignore
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

      window.location.hash = ""
      window.localStorage.setItem("token", token)
  }

  setToken(token)

}, [])

const logout = () => {
  setToken("")
  window.localStorage.removeItem("token")
}

const Container = () => (
  <div id="artistcontainer">

  </div>
);

// function newPlay(uri) {
//   console.log(uri)
// }

 
    const Home = () => (
       <div id="new">
      <RecordContainer loadArtist={loadArtist} records={records}></RecordContainer>
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>React Spotify Player 🎧</h1>
      <SpotifyPlayer currentTrack={currentTrack}  token={token} />
       </div>

      { artists ? <ArtistContainer wishes={wishes} setWishes={setWishes} releases={releases} artists={artists} ></ArtistContainer> : Container()}
       <GenreRecords token={token} newrecords={newrecords}></GenreRecords>
       <Form setNewRecords={setNewRecords} records={records}></Form>
       <Footer></Footer>
       </div>
    );

    


  return (
    <div className="App">
                {!token ?
                <div id="spotform">
                  <a id="link" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${encodeURIComponent(SCOPES.join(" "))}&response_type=${RESPONSE_TYPE}`}>Login
                    {/* <a id="link" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login */}
                        to Spotify</a></div>
                        
                    :  <div id="spotform"><button onClick={logout}>Logout</button></div>}
                    

       <BrowserRouter>
       <Nav/>
        <Routes>
         <Route path="/" element={Home()}/>
          <Route path="/form" element={<RecordForm setRecords={setRecords} records={records}/>}></Route>
          <Route path="/wishlist" element={<WishList  wishes={wishes}/>}></Route>
          <Route path="/recordinfo" element={<RecordInfo setCurrentTrack={setCurrentTrack}   token={token}/>}></Route>
          <Route path="/recordinfotwo" element={<RecordInfoTwo setCurrentTrack={setCurrentTrack} />}></Route>
        </Routes>
       </BrowserRouter>  
     
     </div>
  );
}

export default App;

