// import logo from './logo.svg';
import { useEffect } from 'react'
import React from 'react';
import { useState } from 'react'
import './App.css';
import Form from './Form';
import RecordContainer from './RecordContainer';
import GenreRecords from './GenreRecords'
// import ArtistContainer from './ArtistContainer';
//import RecordInfo from './RecordInfo'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [records, setRecords] = useState([])
  const [newrecords, setNewRecords] = useState([])

  // const [artists, setArtists] = useState("")
  //523532


useEffect(() => {
  fetch("http://localhost:3000/records")
  .then((response) => response.json())
  .then((json) => {
    setRecords(json)
    console.log(json)})
    
}, [])

// useEffect(() => {
//   fetch("https://api.discogs.com/database/search?q=Weezer&token=LLpnJGVLeVyBUUbxqvANHvFbrHjjecvWNLqbioFo")
//   .then((response) => response.json())
//   .then((json) => {
//     // setRecords(json)
//     console.log(json)})
    
// }, [])


// useEffect(() => {
//   fetch("http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=d1cc06a04bf11333b1c0474a02d1e103&format=json")
//   .then((response) => response.json())
//   .then((json) => {
//     setArtists(json.artists.artist)
//     console.log(json.artists.artist)})
    
// }, [])

//d1cc06a04bf11333b1c0474a02d1e103
//Shared secret	936e9e1e3a6465bc45750e280efd8e91
// /2.0/?method=chart.gettopartists&api_key=YOUR_API_KEY&format=json
//http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=d1cc06a04bf11333b1c0474a02d1e103&format=json


  return (
    <div className="App">
     
     <RecordContainer records={records}></RecordContainer>
     {/* <RecordInfo record={record}></RecordInfo> */}
     {/* <ArtistContainer artists={artists}></ArtistContainer> */}
      {/* <RecordContainer records={records}></RecordContainer> */}
      {/* <ArtistContainer artists={artists}></ArtistContainer> */}
      <GenreRecords newrecords={newrecords}></GenreRecords>
      <Form setNewRecords={setNewRecords} records={records}></Form>
    </div>
  );
}

export default App;


// https://api.discogs.com/oauth/LLpnJGVLeVyBUUbxqvANHvFbrHjjecvWNLqbioFo
//LLpnJGVLeVyBUUbxqvANHvFbrHjjecvWNLqbioFo