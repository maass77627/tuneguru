import React from 'react';
import { useState } from 'react';

function Form( { records } ) {
    const [artist, setArtist] = useState("")

    function handleArtistChange(event) {
       console.log(event.target.value)
        // setArtist(event.target.value)
       
    }

    function handleSubmit() {

    }

return (
    <div id="form">
        <form onSubmit={handleSubmit}>
        <input onChange={handleArtistChange} type="text" value={artist} />
         <button type="submit">Submit</button>
         </form>
    </div>
)

}

export default Form