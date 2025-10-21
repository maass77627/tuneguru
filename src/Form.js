import React from 'react';
import { useState } from 'react';

function Form( { records, setNewRecords } ) {
    const [genre, setGenre] = useState([])
   
    function handleGenreChange(event) {
        setGenre(event.target.value)
       
    }

    function handleSubmit(e) {
        e.preventDefault()
       let newrecords = records.filter((record) => record.genre === genre)
            console.log(newrecords)
            setNewRecords(newrecords)

    }



return (
    <div id="form">
        <form onSubmit={handleSubmit}>
        <input id="genreinput" onChange={handleGenreChange} type="text" placeholder="type a genre" value={genre} />
         <button type="submit">Submit</button>
         </form>
    </div>
)

}

export default Form

