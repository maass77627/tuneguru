// import logo from './logo.svg';
import { useEffect } from 'react'
import React from 'react';
import { useState } from 'react'
import './App.css';
import Form from './Form';
import RecordContainer from './RecordContainer';
import GenreRecords from './GenreRecords'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ArtistContainer from './ArtistContainer';
import RecordForm from './RecordForm';
import WishList from './WishList';
import Nav from "./Nav";
//import RecordInfo from './RecordInfo'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const CLIENT_ID = "28991f2364bc498ba7978a55778a2b14"
  const REDIRECT_URI = "http://localhost:3006"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [records, setRecords] = useState([])
  const [newrecords, setNewRecords] = useState([])
  const [token, setToken] = useState("")
  const [artists, setArtists] = useState(null)
  const [releases, setReleases] = useState([])
  //523532


useEffect(() => {
  fetch("http://localhost:3000/records")
  .then((response) => response.json())
  .then((json) => {
    setRecords(json)
    console.log(json)})
    
}, [])

function loadArtist(artistname) {
  let newname
  artistname.includes(" ") ? newname = artistname.replace(/ /g, "+") : newname = artistname
  fetch(`https://api.spotify.com/v1/search?q=artist%3A${newname}&type=artist&limit=1`, {
    headers: {
      Authorization: 'Bearer ' + token
    }

  })
  .then((response) => response.json())
  .then((json) => {
    setArtists(json.artists.items[0])
    console.log(json.artists.items[0])
    loadArtistTracks(json.artists.items[0].id)})
    }

function loadArtistTracks(artistid) {
  fetch(`https://api.spotify.com/v1/artists/${artistid}/albums`, {
    headers: {
      Authorization: 'Bearer ' + token
    }

  })
  .then((response) => response.json())
  .then((json) => {
    setReleases(json.items)
    console.log(json.items)})
  }


useEffect(() => {
  const hash = window.location.hash
  let token = window.localStorage.getItem("token")

  if (!token && hash) {
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

useEffect(() => {
  fetch("https://api.spotify.com/v1/artists/3jOstUTkEu2JkjvRdBA5Gu/albums", {
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
  .then((response) => response.json())
  .then((json) => {
    // setRecords(json)
    console.log(json)})
    })
 
    const Home = () => (
      <div className="App">
      <RecordContainer loadArtist={loadArtist} records={records}></RecordContainer>

      { artists ? <ArtistContainer releases={releases} artists={artists} ></ArtistContainer> : null}
       <GenreRecords newrecords={newrecords}></GenreRecords>
       <Form setNewRecords={setNewRecords} records={records}></Form>
      </div>
    );


  return (
    <div className="App">
                {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                        to Spotify</a>
                    : <button onClick={logout}>Logout</button>}

       <BrowserRouter>
       <Nav/>
       {/* <NavLink to="/">Home</NavLink><br></br>
        <NavLink to="/form">Add a Record</NavLink><br></br>
        <NavLink to="/wishlist">WishList</NavLink> */}
         <Routes>
         <Route path="/" element={Home()}/>
          <Route path="/form" element={<RecordForm/>}></Route>
          <Route path="/wishlist" element={<WishList />}></Route>
        </Routes>
       </BrowserRouter>  
     
     </div>
  );
}

export default App;

