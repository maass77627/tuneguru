import React from 'react';
import { useState } from 'react';

function Form( { records } ) {
    const [genre, setGenre] = useState([])

    function handleGenreChange(event) {
       console.log(event.target.value)
        setGenre(event.target.value)
       
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e)
       let newrecords = records.filter((record) => {record.genre == genre})

    }



return (
    <div id="form">
        <form onSubmit={handleSubmit}>
        <input onChange={handleGenreChange} type="text" value={genre} />
         <button type="submit">Submit</button>
         </form>
    </div>
)

}

export default Form