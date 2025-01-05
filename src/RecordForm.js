import React from 'react';
import { useState } from 'react';

    function RecordForm() {

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
                console.log(e.target.value)
            }

    return(
        <div id="recordform">
            <form onSubmit={handleSubmit}>
                <label>title</label>
                <input onChange={handleTitleChange} type="text" value={formData.title}></input>
                <label>artist</label>
                <input onChange={handleArtistChange} type="text" value={formData.artist}></input>
                <label>genre</label>
                <input onChange={handleGenreChange} type="text" value={formData.genre}></input>
                <label>description</label>
                <input onChange={handleDescriptionChange} type="text" value={formData.description}></input>
                <label>image</label>
                <input onChange={handleImageChange} type="text" value={formData.image}></input>
                <submit type="submit" value="submit">Submit</submit>
            </form>

        </div>
    )
}

export default RecordForm