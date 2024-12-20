// import logo from './logo.svg';
import { useEffect } from 'react'
import React from 'react';
import { useState } from 'react'
import './App.css';
import Form from './Form';
import RecordContainer from './RecordContainer';

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [records, setRecords] = useState([])

  // const [artist, setArtist] = useState("")
  //523532


useEffect(() => {
  fetch("http://localhost:3000/records")
  .then((response) => response.json())
  .then((json) => {
    setRecords(json)
    console.log(json)})
    
}, [])






  return (
    <div className="App">
     
      <Form></Form>

      <RecordContainer records={records}></RecordContainer>
    </div>
  );
}

export default App;
