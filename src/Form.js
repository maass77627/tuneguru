import React from 'react';
import { useState } from 'react';

function Form( { records, setNewRecords } ) {
    const [genre, setGenre] = useState([])
    // const [newrecords, setNewRecords] = useState([])

    function handleGenreChange(event) {
       console.log(event.target.value)
        setGenre(event.target.value)
       
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e)
       let newrecords = records.filter((record) => record.genre === genre)
            console.log(newrecords)
            setNewRecords(newrecords)

    }



return (
    <div id="form">
        <form onSubmit={handleSubmit}>
<<<<<<< HEAD
        <input onChange={handleGenreChange} type="text" placeholder="type a genre" value={genre} />
=======
        <input onChange={handleGenreChange} type="text" value={genre} />
>>>>>>> 1e780f475ce54677c5ae1e380e09665d107c5c15
         <button type="submit">Submit</button>
         </form>
    </div>
)

}

export default Form