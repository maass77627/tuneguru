import React from 'react';
import { useState } from 'react';


    function RecordForm({ setRecords, records }) {

    const [formData, setFormData] = useState({
        title: "blue album",
        artist: "weezer",
        genre: "rock",
        description: "fun and happy",
        image: "weezer.jpg",
    })

    function handleTitleChange(e) {
        setFormData({
            ...formData, 
           title: e.target.value
        })

    }

    function handleArtistChange(e) {
        setFormData({
            ...formData, 
           artist: e.target.value
        })

    }

    function handleGenreChange(e) {
        setFormData({
            ...formData, 
          genre: e.target.value
        })

    }

    function handleImageChange(e) {
        setFormData({
            ...formData, 
          image: e.target.value
        })

    }

    function handleDescriptionChange(e) {
        setFormData({
            ...formData, 
          description: e.target.value
        })

    }

            function handleSubmit(e){
                e.preventDefault()
                console.log(e.target)
                let form = e.target
                form.className = "hidden"

                fetch("http://localhost:3000/records", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                      }, 
                      body: JSON.stringify(formData)
                })
                .then((response) => response.json())
                .then((json) => {
                    let updatedrecords = [...records, json]
                    setRecords(updatedrecords)
                 console.log(json)})
            }

    return(
        <div id="recordform">
            <form onSubmit={handleSubmit}>
                <label id="label">Title</label>
                <input id="titleinput" onChange={handleTitleChange} type="text" value={formData.title}></input><br></br>
                <label id="label">Artist</label>
                <input id="titleinput" onChange={handleArtistChange} type="text" value={formData.artist}></input><br></br>
                <label id="label">Genre</label>
                <input id="titleinput" onChange={handleGenreChange} type="text" value={formData.genre}></input><br></br>
                <label id="label">Descr.</label>
                <input  id="titleinput" onChange={handleDescriptionChange} type="text" value={formData.description}></input><br></br>
                <label id="label">Image</label>
                <input id="titleinput" onChange={handleImageChange} type="text" value={formData.image}></input><br></br>
                <br></br>
                <input type="submit" value="submit"></input>
               
               
            </form>
        </div>
        
    )
}

export default RecordForm